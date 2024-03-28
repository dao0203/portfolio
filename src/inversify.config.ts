import { Container } from "inversify";
import { GitHubApi, GitHubApiImpl } from "./api/githubApi";

const apiContainer = new Container();
apiContainer.bind<GitHubApi>(TYPES.GitHubAPI).to(GitHubApiImpl);
