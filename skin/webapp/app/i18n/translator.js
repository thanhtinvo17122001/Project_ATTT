class Translator {
    constructor() {
        this.language = this.getLanguage();
        this.elements = document.querySelectorAll("[data-i18n]");
    }
    getLanguage() {
        let lang = navigator.languages ? navigator.languages[0] : navigator.language;
        return lang.substring(0, 2);
    }
    load(lang = null) {
        if (lang) {
            this.language = lang;
        }
        fetch(`/static/webapp/app/i18n/lang/${this.language}.json`)
            .then((res) => res.json())
            .then((translation) => {
                this.translate(translation);
            });
    }
    translate(translation) {
        this.elements.forEach((element) => {
            let keys = element.dataset.i18n.split(".");
            let text = keys.reduce((obj, i) => obj[i], translation);
            if (text) {
                element.innerHTML = text;
            }
        });
    }
    toggleLangTag() {
        if (document.documentElement.lang !== this.language) {
            document.documentElement.lang = this.languague;
        }
    }
}
export default Translator;
