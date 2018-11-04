const bodyParser = require('body-parser');
const express = require('express');
const language = require('@google-cloud/language');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Instantiates a client
const client = new language.LanguageServiceClient({
    credentials: {
        "type": "service_account",
        "project_id": "lie-detector-221420",
        "private_key_id": "4216707c6af1115515bf7b1c8525495d3b9173a7",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCMojEUTXhJw19i\noueSGn5rE352oKmkQ2of/UIqFBI9fCgCd6ZRLZ1lLG2E6sWtb4r4RmlLDg3/px8a\nGHU1Moy+2/bAadUszCmE1tiLnYoH1avMCwGWYS6SQSq9BUIK2YAQYEBQEEN2GJbY\n04ghQTpS+/zDv/FnHrhkch+kG9kn6EHkjlbfpRLetqLy8DY+HuTQBRzlSOtq/FN1\n2sO/88RESnm0epu5jW6NMExHk+nG+IGg+lOFYQ4DyEzjRrl1u+Mvw3QdC1hmWz5j\nLZLtYLtFuk/I+vUceDFOVlibdAykMyFbUmHm/vxLgdpOjteYB680pwdxh51uD+eI\nmIBqm/1rAgMBAAECggEALSn9Zw7GHbJP1MaKZgJ6LPsStxg7wtQfpexYrljJztMr\nqjcww4tJq+9LsM8Q8vUKhVdfg0odNsg+Fcxa/92fE8Bii0KxwnRCtTWmT5gldwSo\n6ptyRBAru66QAipJHmDhXuD6ZnwCnk+hSjsM0dk32OSyNU9UQJC+GQwJm1OSNt1H\nQ+9Sb7IpMya5cFuB61hPTcwmBWVfN5FhwlICrvBot2hIjWi0oONbG55WiAbHVvjz\nB0u15MbML++gLyVsD5vOl8WjOXx5har7p5L1X8KRUpiVdUfrpDVGrystVY8OUvmZ\nkYGi2djqFohLduvOoGyOwBWJyOlngKatmJHh2IGa2QKBgQC/KMpo0H4xSC3a3ykE\nQ/zXNVvzf04hCk5MprXKzUfOjQlFhZIM2Si0Uj1CNbFMG6hEtmDadaXBbxhsyZIr\nRp4jti18JWWKuN1ZVgDVgtjxe/QRCYO9Pv+ChpTIgLR98jRYfQ4UcdtwWP5uS5oP\nLsCbJ9sLpiB0B/kjlS+p+H6W/QKBgQC8VgZWNoFBZOi+EN8qZrMOOSFcdxnJhubQ\nFx4Au6f8lAFusTXRkpXXvRc8QEKLA4etlOaAH1QknZfBEyE4KkbelN19FJyuTpNl\nO7Qz48AHtZWj3Nj2jADBHfiPHD1WyugRuY49F5T7YbFpRa40epuo0ra5SuVZtebp\nhSTQ0lU2hwKBgGOKDAwUNQHYgfgsqCEOfgRaRq0+pyJRSYBkdtlJl5CYpDFNYkXK\ndoWfJULqzo3BARf2l+xpwow9G0zakYBzXzldTcYNexiHNsukGv8TCYCFeQu+Fple\nypHfHm5hhprmmhdR1xkSSJ/x11r7hxdM0wJ3+HnSYafJ1xOORamOOezJAoGANSlH\nIqDB/XaBZ90VUT+p/TLNIu+PfN4yWrybwHM36MjSWq901JI+76W1YFF3NwwpCStF\noRa2xpshUeOXdeYhGQUGPB9MVrthSar/o8H+2247LgTRzU4ZjGlsVuEOw2gE97Pb\n3YzBhe++h0ue77tIIvBPmZ/1e0woQPRPPw6P9RMCgYByTUukFBCYpBysON1Zke/J\no/deb1G0glNo5KfJYN/f0T7KwlAoIswPFScUjRBgTD89GY3dVUEUlr7PWRm3HP4D\nwfyWeyM7/RxK2kFuiOIQfOPdPJd+unQx94eK9tSSoV11by+d8OeSTRCjcobWGiDb\nJ3JuxKQUjLI8GC/+kTdPww==\n-----END PRIVATE KEY-----\n",
        "client_email": "lie-detector@lie-detector-221420.iam.gserviceaccount.com",
        "client_id": "112958941361835404566",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/lie-detector%40lie-detector-221420.iam.gserviceaccount.com"
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

