import Translator from "../../webapp/app/i18n/translator.js";

const translator = new Translator();

fetch(`/static/webapp/app/i18n/lang/${translator.getLanguage()}.json`)
    .then((res) => res.json())
    .then((translation) => {
        $('#search-bar').attr("placeholder", translation["search-placeholder"]);
    });