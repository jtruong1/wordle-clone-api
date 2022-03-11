# wordle-clone-api
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1c8487ffe2f9ddcb7491?action=collection%2Fimport)

A somewhat opinionated REST API for Wordle clones.

To prevent cheating, the word will not be exposed to the client. This means that the client must communicate with the API any time a user wishes to guess the word. The result of the response will contain the correctness of presence and location for each letter.

On initial requests made to the API, a "game state" will be created and associated with the client via session cookie. Only the session ID is saved in the cookie, details regarding the client's game state such as the word currently in play is stored server-side.

By default, sessions (and its associated cookie) expire after 24 hours of its initial creation. An endpoint to regenerate the game state at any time is provided for your convenience.

# Quick Start
```bash
$ git clone https://github.com/jtruong1/wordle-clone-api.git
```

```bash
$ cp .env.example .env
```

Some core settings such as `APP_PORT` and `SESSION_SECRET` may be modified in `.env` if you wish to fine-tune the default configuration. Deployment to Heroku is supported out of the box, however it is recommended to configure `SESSION_SECRET` for production regardless of how you are deploying the project.

Depending on the HTTP client you are using, you may need to ensure that it is able to accept session cookies by setting `XMLHttpRequest.withCredentials` to true. For Axios, a property called `withCredentials` is accessible in the request config.

In the near future, session cookies will be replaced with something more frontend agonistic.

# Endpoints
### GET - `/word`
Gets the game state for the current session. This endpoint is intended to be used for testing and/or debugging purposes.

### Parameters
| Input | Type | Description |
|-------|------|-------------|
| None  |      |             |

### Response
| Output | Type  | Description                                |
|--------|-------|--------------------------------------------|
| state  | array | Contains the ID and word of the game state |
---

### POST - `/word`
Generates a new game state for the current session.

### Parameters
| Input | Type | Description |
|-------|------|-------------|
| None  |      |             |

### Response
| Output  | Type   | Description              |
|---------|--------|--------------------------|
| state   | string | The ID of the game state |
---

### POST - `/word/guess`
Compares the provided word against the word in the game state.

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
