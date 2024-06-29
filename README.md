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
![image](https://github.com/aderawmolla/readme/assets/103243862/725a0516-b45b-4282-856b-b5ae45a10bcb)
![image](https://github.com/aderawmolla/readme/assets/103243862/3f018ab2-46f7-48da-befc-9cb9267c339e)


### 2. deleteUser
- **Description:** Delete a user by ID.
- **URL:** DELETE /users/deleteUser/{userId}
![image](https://github.com/aderawmolla/readme/assets/103243862/b1f85f8a-9f4b-4a47-89d8-d4d9af86ae18)

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
![image](https://github.com/aderawmolla/readme/assets/103243862/d1daf3df-1ee8-4c2c-8148-32af14d16ff5)

### 4. getUser
- **Description:** Get user details by ID.
-**URL:** GET /users/getUser/{userId}
5. getAllUsers
- **Description:** Get all users.
- **URL:** GET /users/getAll
![image](https://github.com/aderawmolla/readme/assets/103243862/af7c15a4-cde5-4004-925a-55232054f09d)

### 6. deletePost
- **Description:** Delete a post by ID.
- **URL:** DELETE /posts/deletePost/{postId}
![image](https://github.com/aderawmolla/readme/assets/103243862/6ba05c99-0a59-4795-9e35-1b2d1c290e68)

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
![image](https://github.com/aderawmolla/readme/assets/103243862/5f520215-fa95-43f5-9d8e-d1d736f45590)

### 8. getPosts
- **Description:** Get all posts.
- **URL:** GET /posts/getPosts
![image](https://github.com/aderawmolla/readme/assets/103243862/82f87ccd-d546-428d-bf06-458152453f2c)


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
![image](https://github.com/aderawmolla/readme/assets/103243862/b432a004-3d98-4138-b038-2c4f8a70933b)

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
![image](https://github.com/aderawmolla/readme/assets/103243862/00ded7ad-6088-4590-a9c8-bc82c82a3eae)


### 11. filterUsers
- **Description:** Filter users by username.
- **URL:** GET /users/filterUsers?username={username}
- **Parameters:**
username: The username to filter users by.
![image](https://github.com/aderawmolla/readme/assets/103243862/325afc80-8c12-4c83-910f-ef1c3cc7e84c)

### 12. logout
- **Description:** Logout the current user.
- **URL:** POST /logout
![image](https://github.com/aderawmolla/readme/assets/103243862/52e223e9-da9d-4e33-bf88-940924496a10)


