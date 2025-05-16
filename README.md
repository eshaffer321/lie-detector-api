# Lie-Detector API 🛑 Project Sunset Notice (May 2025)

This project has been **officially sunset** and is no longer maintained.  
It remains public as a historical reference to the **1st Place project at the Monterey Startup Hackathon**.

---

## 🏆 What It Was

A Node.js + Express API that:
- Accepted article text from a Chrome extension.
- Used Google Natural Language API to detect emotive or biased language.
- Returned sentiment scores to the client for further processing.

---

## 🛠️ Key Technologies
- Node.js
- Express
- Google Cloud Natural Language API

---

## 🏅 Award
- **1st Place, Monterey Startup Hackathon**

---

## ⚠️ Status
This project is **no longer maintained or functional**.  
It remains archived for historical and portfolio reference.

> Shipped. Learned. Moving on.


## Summary
This is a node.js and express backend with the purpose of parsing text with the Google Natural Language Library. It is a single route that accepts a text body that is passed from the [chrome extenstion](https://github.com/eshaffer321/lie-detector). The express server will then make a request to the [natual language library](https://cloud.google.com/natural-language/) and return the sentiment of the article text. This will determine if language is emotive or potentially biased. This is then returned to the chrome extension for further processing with other sources.

## Start Up Monterey Hackathon 1st place winner.
This project came in first place at the [Monterey Startup Hackathon](https://csumb.edu/iied/events/startup-monterey-bay-hackathon-2018)

## Getting started
## Prerequisites 
* [Node.js](https://nodejs.org/en/) installed.
* [https://www.npmjs.com/](npm) installed.
* [Google Cloud Platform](https://cloud.google.com/) account and project.
* Credential added to `app.js` for the [client library](https://cloud.google.com/natural-language/docs/reference/libraries#client-libraries-install-nodejs).
* Hostname must be changed in the [chrome extenstion](https://github.com/eshaffer321/lie-detector) `background.js`

## Installing
`npm install`
## Running
`node app.js`
