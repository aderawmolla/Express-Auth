Thunder Client Collection: today's api
This README provides an overview of the Thunder Client collection named "users Copy". The collection includes a set of HTTP requests for user management operations, such as creating, updating, deleting, and retrieving user information. It also includes requests for managing user posts.

Collection Details
Client Name: Thunder Client
Collection Name: users Copy
Collection ID: 3f91ff72-8b10-416f-980d-4a2ecc3d813f
Date Exported: 2024-06-29T18:10:07.252Z
Version: 1.2
Requests
1. Create User
Request ID: cc5cd8a3-12cf-4830-a69a-e118d4affb95
Name: createUser
URL: http://127.0.0.1:3000/users/createUser
Method: POST
Body:
json
Copy code
{ 
  "username": "Aderaw",
  "email": "ade@gmail.com",
  "password": "12345678"
}
2. Delete User
Request ID: cf9b4185-2dcd-4aab-af81-e2428e1477c8
Name: deleteUser
URL: http://127.0.0.1:3000/users/deleteUser/7
Method: DELETE
Body:
json
Copy code
{ 
  "username": "Samuel",
  "email": "sami@gmail.com",
  "password": "12345"
}
3. Edit User
Request ID: 4eb3a89e-f1e3-47f7-bb45-310e842825ea
Name: editUser
URL: http://127.0.0.1:3000/users/updateUser/4
Method: PUT
Body:
json
Copy code
{ 
  "username": "Kokeb",
  "email": "koke@gmail.com",
  "password": "123456"
}
4. Get User
Request ID: f79269a7-8825-4911-a65c-78e2c059ec82
Name: getUser
URL: http://127.0.0.1:3000/users/getUser/7
Method: GET
5. Get All Users
Request ID: 7d4b5cff-3e89-4483-a253-5df2867acaf8
Name: getAllUsers
URL: http://127.0.0.1:3000/users/getAll
Method: GET
6. Delete User Post
Request ID: fcfc3ba7-138d-4e16-8259-94851d20047b
Name: deleteUserPost
URL: http://127.0.0.1:3000/posts/deletePost/8
Method: DELETE
7. Create Post
Request ID: 72167627-8c03-4819-a35d-f30e853d5902
Name: createPost
URL: http://127.0.0.1:3000/posts/createPost
Method: POST
Body:
json
Copy code
{ 
  "title": "last class",
  "content": "this is the last session of training"
}
8. Get Posts
Request ID: 76367362-3d23-4c4b-aa01-a01812883373
Name: posts
URL: http://127.0.0.1:3000/posts/getPosts
Method: GET
9. Login
Request ID: 09160809-d3aa-44c6-9c61-25729e481a79
Name: login
URL: http://127.0.0.1:3000/login
Method: GET
Body:
json
Copy code
{ 
  "username": "Aderaw",
  "password": "12345678"
}
10. Register
Request ID: 27addb83-0bb8-48e7-8d3e-7553e3e6023f
Name: register
URL: http://127.0.0.1:3000/register
Method: POST
Body:
json
Copy code
{ 
  "username": "Abe",
  "email": "sami@gmail.com",
  "password": "12345"
}
11. Filter Users
Request ID: 52493584-5f50-4c20-96db-ae720a371be7
Name: filterUsers
URL: http://127.0.0.1:3000/users/filterUsers?username=Aderaw
Method: GET
Parameters:
username: Aderaw
