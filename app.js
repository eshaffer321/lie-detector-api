const bodyParser = require('body-parser');
const express = require('express');
const language = require('@google-cloud/language');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Instantiates a client
const client = new language.LanguageServiceClient({
    credentials: {
    }
});



app.post('/', function (req, res) {


    const document = {
        content: JSON.stringify(req.body),
        type: 'PLAIN_TEXT',
    };
    client
        .analyzeSentiment({document: document})
        .then(results => {
            const sentiment = results[0].documentSentiment;

            console.log(`Sentiment magnitude: ${sentiment.magnitude}`);


            let response = {
                "status": 200,
                "mag": ""
            };
            response.mag = sentiment.magnitude;
            res.send(response)
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
});

app.listen(3000, function () {
    console.log('Server Started on Port 3000...');
});

