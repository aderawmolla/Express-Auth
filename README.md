# Thunder Client API Documentation

Welcome to the Thunder Client API documentation. This guide provides details on how to interact with the API endpoints.

## Overview

- **Client Name:** Thunder Client
- **Collection Name:** users Copy
- **Version:** 1.2
- **Date Exported:** 2024-06-29T18:10:07.252Z

---

## Endpoints

### 1. createUser

- **Description:** Create a new user.
- **URL:** `POST /users/createUser`
- **Body:**
  ```json
  {
    "username": "Aderaw",
    "email": "ade@gmail.com",
    "password": "12345678"
  }
2. deleteUser
Description: Delete a user by ID.
URL: DELETE /users/deleteUser/{userId}
3. editUser
Description: Update user details by ID.
URL: PUT /users/updateUser/{userId}
Body:
json
Copy code
{
  "username": "Kokeb",
  "email": "koke@gmail.com",
  "password": "123456"
}
4. getUser
Description: Get user details by ID.
URL: GET /users/getUser/{userId}
5. getAllUsers
Description: Get all users.
URL: GET /users/getAll
6. deletePost
Description: Delete a post by ID.
URL: DELETE /posts/deletePost/{postId}
7. createPost
Description: Create a new post.
URL: POST /posts/createPost
Body:
json
Copy code
{
  "title": "last class",
  "content": "this is the last session of training"
}
8. getPosts
Description: Get all posts.
URL: GET /posts/getPosts
9. login
Description: Login with username and password.
URL: GET /login
Body:
json
Copy code
{
  "username": "Aderaw",
  "password": "12345678"
}
10. register
Description: Register a new user.
URL: POST /register
Body:
json
Copy code
{
  "username": "Abe",
  "email": "sami@gmail.com",
  "password": "12345"
}
11. filterUsers
Description: Filter users by username.
URL: GET /users/filterUsers?username={username}
Parameters:
username: The username to filter users by.
12. logout
Description: Logout the current user.
URL: POST /logout
