const express = require('express');
const trans = require('');


const translator = new GoogleTranslator();

// Translate single string
translator
	.translate('Hello world', 'en', 'de')
	.then((translate) => console.log('Translate result', translate));
