
class Article {
    title: string;
    content: string;
    constructor(init: Partial<Article>) {
        this.title = init.title || '';
        this.content = init.content || '';
    }
}
