import { json } from "node:stream/consumers";

export class ReposFile {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    htmlUrl: string;
    gitUrl: string;
    downloadUrl: string;
    type: string;
    links: {
        self: string;
        git: string;
        html: string;
    };

    constructor(data: any) {
        this.name = data.name;
        this.path = data.path;
        this.sha = data.sha;
        this.size = data.size;
        this.url = data.url;
        this.htmlUrl = data.html_url;
        this.gitUrl = data.git_url;
        this.downloadUrl = data.download_url;
        this.type = data.type;
        this.links = {
            self: data._links.self,
            git: data._links.git,
            html: data._links.html
        };
    }
}
