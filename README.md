# Documentation 
## How to use this  API
```
git clone git@github.com:aderawmolla/Express-Auth.git
touch .env  # add environemnt variables and create your own database
cd Express-Auth
npm install
npm instart
```

---

## Endpoints

### 1. createUser

- **Description:** Create a new user.
- **URL:** POST /users/createUser
- **Body:**
  
```
  {
    "username": "Aderaw",
    "email": "ade@gmail.com",
    "password": "12345678"
  }
```
### 2. deleteUser
- **Description:** Delete a user by ID.
- **URL:** DELETE /users/deleteUser/{userId}
### 3. editUser
- **Descriotion** : Update user details by ID.
- **URL:** PUT /users/updateUser/{userId}
- **Body:**
```
{
  "username": "Kokeb",
  "email": "koke@gmail.com",
  "password": "123456"
}
```
### 4. getUser
- **Description:** Get user details by ID.
-**URL:** GET /users/getUser/{userId}
5. getAllUsers
- **Description:** Get all users.
- **URL:** GET /users/getAll
### 6. deletePost
- **Description:** Delete a post by ID.
- **URL:** DELETE /posts/deletePost/{postId}
### 7. createPost
- **Description:** Create a new post.
- **URL:** POST /posts/createPost
- **Body:**
```
{
  "title": "last class",
  "content": "this is the last session of training"
}
```
### 8. getPosts
- **Description:** Get all posts.
- **URL:** GET /posts/getPosts

### 9. login
- **Description:** Login with username and password.
- **URL:** GET /login
- **Body:**
```
{
  "username": "Aderaw",
  "password": "12345678"
}
```
### 10. register
- **Description:** Register a new user.
- **URL:** POST /register
- **Body:**
```
{
  "username": "Abe",
  "email": "sami@gmail.com",
  "password": "12345"
}
```
### 11. filterUsers
- **Description:** Filter users by username.
- **URL:** GET /users/filterUsers?username={username}
- **Parameters:**
username: The username to filter users by.
### 12. logout
- **Description:** Logout the current user.
- **URL:** POST /logout
