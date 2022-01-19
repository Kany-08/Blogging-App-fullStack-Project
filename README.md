# Blogging-App-fullStack-Project


# Blog App

In this assignment you will be expected to write a backend code for Blog app,


## Getting started

The following packages you need to install before you start writing code:

> "express",
> "mongoose",
> "nodemon"
> "bcrypt"
> "multer"

## add scripts in package.json
 - "start":"node server.js",
 - "dev":"nodemon server.js"

## What you will be doing

You will create a restful backend server.

For this:

pre: Create a database called blogs-database via mongodb compass

pre2: Create necessary folders according to MCV structure

## Task 1 - Prepare your server code

1. Setup a server in `server.js` with `express.js`

2. Use the `express.json()` middleware

3. Your server should listen to the localhost:3000 port in the server.js file,

## Task 2 - Prepare your Schemas:
## create 3 collections
 - users
 - blogs
 - comments

1. create usersSchema:
   each user must contain these following fields:

- firstName: string , required, max 50 characters
- lastName: string and required, max 50 characters
- email: string, not required,max 50 character
- password: string, required, min 6 characters
- image:string, set default avatar ,use https://joeschmoe.io/api/v1/ {lastname}
- Use bcrypt to create a hash of the password
- blogs: should be an array containing blogs ids as reference
- createAt:type Date and set current time as default value


2. create blogs:
   each blog must contain these following fields:

- title: string , required
- description: string and optional
- content: string and required
- image: string and optional use default https://source.unsplash.com/random/300x200?sig=${Math.random()} 
- userId: objectID and ref to users collection
- comments: should be an array containing comments ids as reference
- createAt: Date and set current time as default value

3. create comments
each comment must contain theses fields

- commentText : string and required,
- userId: objectID and ref to users collection
- blogId: objectID and ref to blog collection
- replyText: array of objectIDs and ref to comments collection

## Task 3 - Prepare your routes:

1. using userSchema, create controllers called createUser, updateUser, getUser, getUsers, deleteUser.

- If the user exists, send a fail response to the user
- If the user doesn't exist, create the user

2. using blogSchema, create controllers called createBlog, updateBlog,getBlog,getBlogs, deleteBlog.

    -only registered users can upload blogs.
    -guest users can see/get all blogs

3. using comments ,create a controller called createComment, updateComment, getComment, getcomments, deleteComment. 

 -only registered users can write comments on under blogs.

## Task 4 - endpoints:

- users routes
```js
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
``` 
- blogs routes
```js
    GET /blogs
    GET /blogs/:id
    POST /blogs
    PATCH /blogs/:id
    DELETE /blogs/:id
```
- comments routes
```js
    GET /comments
    GET /comments/:id
    POST /comments
    PATCH /comments/:id
    DELETE /comments/:id
```



## Task 5- CRUD Operations

Perform CRUD operations on users, blogs and comments collections.

Good Luck!