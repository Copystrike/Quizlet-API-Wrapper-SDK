# Quizlet-API-Wrapper-SDK

This SDK makes https calls to the Quizlet WebApi v3.X and also makes calls to the official website to get necessary information that cannot be obtained through the WebApi or just is not figured out yet.

---

# NOTE

I did it for the Github stars, and my languages graph so plz? I am also coding this project while being on an internship which I hate and a project for someone else.

## Bad code?

Feel free to make a pull request or describe to me in detail why it should be changed or why it should not be done "this" way, thanks.

## Requirements

- Quizlet User Account (For some endpoints)

## Features


### Classes

| Endpoint                   | description      | Authentication  | Implemented |
|----------------------------|----------------|-----------|---|
| GET /classes/CLASS_ID | View a single class. |
| GET /classes/CLASS_ID/sets | View full details of all sets in a class. |
| POST /classes | Add a new class. |
| PUT /classes/CLASS_ID | Edit a class. |
| DELETE /classes/CLASS_ID | Delete a class. |
| PUT /classes/CLASS_ID/sets/SET_ID | Add a set to a class. |
| DELETE /classes/CLASS_ID/sets/SET_ID | Remove a set from a class. |
| PUT /classes/CLASS_ID/members/USERNAME | Join (or apply to join) a class. |
| DELETE /classes/CLASS_ID/members/USERNAME | Leave a class. |

### Images

| POST /images | Upload one or more images. |

### Searching

| Endpoint                   | description      | Authentication  | Implemented |
|----------------------------|----------------|-----------|---|
| GET /search/sets           | Search for sets by title, description or term. Returns limited information. | 
| GET /search/classes        | Search for classes by their title and description. |
| GET /search/universal      | Search for classes, users, and sets all together |

### Sets
| Endpoint        | description | Authentication  | Already Implemented |
|-----------------|-------------|-----------------|---------------------|
| GET /sets/SET_ID | View complete details (including all terms) of a single set. |
| GET /sets/SET_ID/terms | View just the terms in a single set. |
| GET /sets/SET_ID/password | Submit a password for a password-protected set. |
| GET /sets | View complete details of multiple sets at once. |
| GET /classes/CLASS_ID/sets | View complete details of all sets in a class. |
| GET /users/USERNAME/sets | View complete details about all the user's created sets. |
| GET /users/USERNAME/favorites | View complete details about all the user's favorited sets. |
| POST /sets | Add a new set |
| PUT /sets/SET_ID | Edit an existing set |
| DELETE /sets/SET_ID | Delete an existing set |
| POST /sets/SET_ID/terms | Add a single term to a set |
| PUT /sets/SET_ID/terms/TERM_ID | Edit a single term within a set |
| DELETE /sets/SET_ID/terms/TERM_ID | Delete a single term within a set |

### Users

| Endpoint                   | description      | Authentication  | Implemented |
|----------------------------|----------------|-----------|---|
| GET /users/USERNAME | View basic user information, including their sets, favorites, last 25 sessions, etc. |
| GET /users/USERNAME/sets | View complete details about all the user's created sets. |
| GET /users/USERNAME/favorites | View complete details about all the user's favorited sets. |
| GET /users/USERNAME/classes | View complete details about all the classes that the user is a member of. |
| GET /users/USERNAME/studied | View the last 100 recently studied sessions for a user. |
| PUT /users/USERNAME/favorites/SET_ID | Mark a set as a favorite. |
| DELETE /users/USERNAME/favorites/SET_ID | Unmark a set as a favorite. |

