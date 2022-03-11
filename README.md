# wordle-clone-api
REST API for wordle-clone.

To prevent cheating, the word will not be exposed to the client until the user has guessed the word. The API will also provide a mechanism to allow the user to guess the word via the `/word/validate` endpoint. The user should be notified if their guess is correct or incorrect based on the result provided.

# Quick Start
```bash
$ git clone https://github.com/jtruong1/wordle-clone-api.git
```

```bash
$ cp .env.example .env
```

The API is accessible at `<base URL>/api/`. Some variables such as `APP_PORT` and `SESSION_SECRET` may be modified in `.env` if you want to fine tune the default configuration.\
\
After making a successful request to any endpoint from the client, a cookie will be created which contains the user's session ID. The session stores some information about the user's game state such as the word currently in play.

# Endpoints
### GET - `/word`
Gets the word currently in play. This endpoint is mainly used for testing purposes.

### Parameters
| Input | Type | Description |
|-------|------|-------------|
| None. |      |             |

### Response
| Output | Type   | Description                |
|--------|--------|----------------------------|
| word   | string | The word currently in play |
---

### POST - `/word`
Generates a new word and saves it in the session.

### Parameters
| Input | Type | Description |
|-------|------|-------------|
| None. |      |             |

### Response
| Output  | Type | Description |
|---------|------|-------------|
| success | true |
---

### POST - `/word/guess`
Compares the provided word against the generated word.

### Parameters
| Input | Type   | Description |
|-------|--------|-------------|
| word  | string |             |

### Response
| Output     | Type     | Description                                        |
|------------|----------|----------------------------------------------------|
| correct    | boolean  | Whether or not it is an exact match                |
| letters    | Letter[] | List of letters indicating the status of the match |
---
