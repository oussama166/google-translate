const express = require('express');
const GoogleTranslator = require('');

const translator = new GoogleTranslator({
	headers: {
		'User-Agent':
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
	},
});

translator
	.translate('Hello world', 'en', 'de')
	.then((translate) => console.log('Translate result', translate));