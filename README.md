# User Registration Endpoint

This document describes the POST /user/register endpoint used to create a new user account.

## Endpoint

POST /user/register

> Creates a new user and returns an authentication token and the newly created user (without password).

## Request

- Content-Type: application/json

Request body fields:

- firstname (string, required) — At least 3 characters.
- lastname (string, optional) — If provided, at least 3 characters.
- email (string, required) — Must be a valid email address.
- password (string, required) — At least 6 characters.

Example

{
  "firstname": "Jane",
  "lastname": "Doe",
  "email": "jane.doe@example.com",
  "password": "supersecret"
}

## Validation

The server validates request body fields using `express-validator`. If validation fails, the server responds with 400 Bad Request and an `errors` array describing issues.

## Responses

- 201 Created
  - Description: User created successfully.
  - Body: { token: string, user: object }
    - `token`: JWT valid for 1 hour.
    - `user`: Created user object (password is omitted by default).

- 400 Bad Request
  - Description: Input validation failed.
  - Body: { errors: [ { msg, param, location } ] }

- 500 Internal Server Error
  - Description: Unexpected server error (DB error, hashing error, etc.).
  - Body: Standard error response depending on your global error handler.

## Notes

- Passwords are hashed before being stored.
- The `email` field is unique — attempting to register with an existing email will fail (typically 500 or a handled 4xx depending on controller error handling).

## Example cURL

```bash
curl -X POST http://localhost:3000/user/register \
  -H "Content-Type: application/json" \
  -d '{"firstname":"Jane","lastname":"Doe","email":"jane.doe@example.com","password":"supersecret"}'

## Example Response

Successful registration (`201 Created`):

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": "60f7c2b8e1d2c8a1b4e8d123",
        "firstname": "Jane",
        "lastname": "Doe",
        "email": "jane.doe@example.com",
        "createdAt": "2024-06-10T12:34:56.789Z",
        "updatedAt": "2024-06-10T12:34:56.789Z"
    }
}
```
