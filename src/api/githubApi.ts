import axios from "axios";
import { injectable } from "inversify";

export interface GitHubApi {
    getQiitaItems(): Promise<any>;
    getQiitaTextFromFileName(fileName: string): Promise<string>;
}

@injectable()
class GitHubApiImpl implements GitHubApi {
    private readonly baseUrl = "https://api.github.com/repos/dao0203/qiita-article/contents/public/";
    private readonly qiitaARticleDownloadUrl = "https://raw.githubusercontent.com/dao0203/qiita-article/main/public/";
    async getQiitaItems(): Promise<any> {
        axios.get(this.baseUrl)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.error(err);
            });
    }
    async getQiitaTextFromFileName(fileName: string): Promise<string> {
        return axios.get(this.qiitaARticleDownloadUrl + fileName)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.error(err);
            });
    }

}

export { GitHubApiImpl };
