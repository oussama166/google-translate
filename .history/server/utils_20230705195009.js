const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');


const translator = new GoogleTranslator.GoogleTranslator();


defa function Translate(text, from, to) {
    return new Promise((resolve, reject) => {
        translator.translate(text, from, to).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    });
}

