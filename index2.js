const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

const password = 'password';

app.get('/encode/:message', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.message));
});
app.get('/decode/:message', (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.message));
});

app.listen(port, () => {
    console.log('We are live on ' + 'http://127.0.0.1:'+port);
});