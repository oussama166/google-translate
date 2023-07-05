function Translate(text, from, to) {
    return new Promise((resolve, reject) => {
        translator.translate(text, from, to).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    });
}