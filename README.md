# wordle-clone-api
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1c8487ffe2f9ddcb7491?action=collection%2Fimport)

A somewhat opinionated REST API for Wordle clones.

To prevent cheating, the word will not be exposed to the client. This means that the client must communicate with the API any time a user wishes to guess the word. The result of the response will contain the correctness of presence and location for each letter.

# Quick Start
```bash
$ git clone https://github.com/jtruong1/wordle-clone-api.git
```

```bash
$ cp .env.example .env
```

Some core settings such as `APP_PORT` and `APP_KEY` may be modified in `.env` if you wish to fine-tune the default configuration. Deployment to Heroku is supported out of the box, however it is recommended to configure `APP_KEY` for production regardless of how you are deploying the project.

To generate a random word, you may pass a `seed` via the query string or as part of the request body.

# Endpoints
### GET - `/word`
Gets the current game state. This endpoint is intended to be used for testing and/or debugging purposes.

### Parameters
| Input | Type | Description |
|-------|------|-------------|
| None  |      |             |

### Response
| Output | Type  | Description                                    |
|--------|-------|------------------------------------------------|
| state  | array | Contains the ID and solution of the game state |
---

### POST - `/word/guess/:word?`
Compares a word against the solution in the game state. You can either pass the word in the request body or as a route parameter.

### Parameters
| Input | Type   | Description |
|-------|--------|-------------|
| word  | string |             |

### Response
| Output  | Type     | Description                                              |
|---------|----------|----------------------------------------------------------|
| state   | string   | The ID of the game state                                 |
| correct | boolean  | Whether or not the word is an exact match                |
| letters | Letter[] | The correctness of presence and location for each letter |
---
