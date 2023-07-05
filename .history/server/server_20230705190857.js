const express = require('express');
const translate = require('@vitalets/google-translate-api');


const translator = new GoogleTranslator();

// Translate single string
translator
	.translate('Hello world', 'en', 'de')
	.then((translate) => console.log('Translate result', translate));
