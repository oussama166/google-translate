const express = require('express');
const GoogleTranslator = require('@translate-tools/core');


const translator = new GoogleTranslator();

// Translate single string
translator
	.translate('Hello world', 'en', 'de')
	.then((translate) => console.log('Translate result', translate));
