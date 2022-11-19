import Translator from "../i18n/translator.js";

export default class View {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.getElementsByTagName("title")[0].setAttribute("data-i18n",title);
        let translator = new Translator();
        translator.load();
    }

    async getHtml() {
        return "";
    }
}