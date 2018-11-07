# Lie-detector-api
webserver to take in text and return a sentiment analysis from gcp natural language library
## Summary
This is a node.js and express backend with the purpose of parsing text with the Google Natural Language Library. It is a single route that accepts a text body that is passed from the [chrome extenstion](https://github.com/eshaffer321/lie-detector). The express server will then make a request to the [natual language library](https://cloud.google.com/natural-language/) and return the sentiment of the article text. This will determine if language is emotive or potentially biased. This is then returned to the chrome extension for further processing with other sources.

## Start Up Monterey Hackathon 1st place winner.
This project came in first place at the [Monterey Startup Hackathon](https://csumb.edu/iied/events/startup-monterey-bay-hackathon-2018)

## Getting started
## Prerequisites 
* Node.js](https://nodejs.org/en/) installed.
* [https://www.npmjs.com/](npm) installed.
* [Google Cloud Platform](https://cloud.google.com/) account and project.
* Credential added to `app.js` for the [client library](https://cloud.google.com/natural-language/docs/reference/libraries#client-libraries-install-nodejs).

## Installing
`npm install`
## Running
`npm

