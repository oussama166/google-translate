const express = require('express');
const GoogleTranslator = require('@translate-tools/core/translators/');

console.log('Start server');

console.log(GoogleTranslator);    

// translator
// 	.translate('Hello world', 'en', 'de')
// 	.then((translate) => console.log('Translate result', translate));