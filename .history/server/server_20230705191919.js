const express = require('express');
const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');

console.log('Start server');

console.log(GoogleTranslator.GoogleTranslator);    

// translator
// 	.translate('Hello world', 'en', 'de')
// 	.then((translate) => console.log('Translate result', translate));