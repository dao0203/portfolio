import axios from "axios";
import { injectable } from "inversify";
import { ReposFile } from "./response/qiitaItemResponse";

export interface GitHubApi {
    getQiitaItems(): Promise<ReposFile[]>;
    getQiitaTextFromFileName(fileName: string): Promise<string>;
}

@injectable()
class GitHubApiImpl implements GitHubApi {
    private readonly baseUrl = "https://api.github.com/repos/dao0203/qiita-article/contents/public/";
    private readonly qiitaARticleDownloadUrl = "https://raw.githubusercontent.com/dao0203/qiita-article/main/public/";
    async getQiitaItems(): Promise<ReposFile[]> {
        return await axios.get(this.baseUrl)
            .then(res => {
                return res.data.map((item: any) => new ReposFile(item));
            })
            .catch(err => {
                console.error(err);
            });
    }
    async getQiitaTextFromFileName(fileName: string): Promise<string> {
        return await axios.get(this.qiitaARticleDownloadUrl + fileName)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.error(err);
            });
    }

}

export { GitHubApiImpl };
