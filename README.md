# wordle-clone-api
A frontend agnostic and somewhat opinionated REST API for Wordle-like applications.

To prevent cheating, the word will not in any way be exposed to the client. This means that the client must communicate with the API each time a user is attempting to guess the word via the `/word/guess` endpoint. The result of the response will contain the correctness of locations as well as presence for each letter.

# Quick Start
```bash
$ git clone https://github.com/jtruong1/wordle-clone-api.git
```

```bash
$ cp .env.example .env
```

The API is accessible at `<base URL>/api/`. Some variables such as `APP_PORT` and `SESSION_SECRET` may be modified in `.env` if you want to fine tune the default configuration.\
\
After making a successful request to any endpoint from the client, a cookie will be created which contains the user's session ID. The session stores information about the user's game state such as the word currently in play.

# Endpoints
### GET - `/word`
Gets the game state for the current session. This endpoint is intended to be used for testing and/or debugging purposes.

### Parameters
| Input | Type | Description |
|-------|------|-------------|
| None. |      |             |

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
| None. |      |             |

### Response
| Output  | Type | Description |
|---------|------|-------------|
| success | true |
---

### POST - `/word/guess`
Compares the provided word against the word in the game state.

### Parameters
| Input | Type   | Description |
|-------|--------|-------------|
| word  | string |             |

### Response
| Output  | Type     | Description                                        |
|---------|----------|----------------------------------------------------|
| state   | string   | The ID of the game state                           |
| correct | boolean  | Whether or not it is an exact match                |
| letters | Letter[] | List of letters indicating the status of the match |
---
