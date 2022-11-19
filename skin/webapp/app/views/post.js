import View from "./view.js";

export default class Post extends View {
    constructor(params) {
        super(params);
        this.setTitle("app-post");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}