import { GitHubApi } from "@/api/githubApi";
import { Article } from "@/domain/article";
import { inject, injectable } from "inversify";

export interface ArticleRepository {
    getQiitaArticles(): Promise<Article[]>;
    getQiitaArticle(fileName: string): Promise<Article>;

}

@injectable()
class ArticleRepositoryImpl implements ArticleRepository {

    @inject(TYPES.GitHubAPI)
    private githubApi!: GitHubApi;

    async getQiitaArticles(): Promise<Article[]> {
        const reposFiles = await this.githubApi.getQiitaItems();
        const articles: Article[] = [];
        for (const reposFile of reposFiles) {
            const content = await this.githubApi.getQiitaTextFromFileName(reposFile.name);
            //TODO: ここでcontentをパースしてtitleを取得する
            articles.push({ title: reposFile.name, content: content });
        }
        return articles;
    }


    async getQiitaArticle(fileName: string): Promise<Article> {
        throw new Error("Method not implemented.");
    }

}