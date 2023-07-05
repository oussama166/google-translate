const express = require('express');
const GoogleTranslator = require('@translate-tools/core/translators/GoogleTranslator');

console.log('Start server');

logger.log('Start server');    

translator
	.translate('Hello world', 'en', 'de')
	.then((translate) => console.log('Translate result', translate));