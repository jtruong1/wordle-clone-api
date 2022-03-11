# wordle-clone-api
A minimally opinionated REST API for Wordle-like applications.

To prevent cheating, the word will not be exposed to the client. This means that the client must communicate with the API any time a user wishes to guess the word. The result of the response will contain the correctness of presence and location for each letter.

For initial requests to any available endpoint, a cookie will be sent which contains the client's session ID. The session stores information about the client's game state such as the word currently in play.

By default, cookies (and its associated session) expire after 24 hours of its initial creation. An endpoint to regenerate the game state whilst retaining the session is provided for your convenience.

# Quick Start
```bash
$ git clone https://github.com/jtruong1/wordle-clone-api.git
```

```bash
$ cp .env.example .env
```

Some variables such as `APP_PORT` and `SESSION_SECRET` may be modified in `.env` if you wish to fine-tune the default configuration. Deployment to Heroku is supported out of the box.

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
| Output  | Type | Description |
|---------|------|-------------|
| success | true |             |
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
