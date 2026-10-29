Sequelize Relationships API

A simple REST API built with Node.js, Express.js, MySQL, and Sequelize ORM to demonstrate CRUD operations and relationships between database tables.

Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Post Man (API Testing)

Project Features

- Create new users.
- Retrieve all users.
- Retrieve a single user by ID.
- Update user information.
- Delete users.
- Create new posts.
- Retrieve all posts.
- Retrieve a single post by ID.
- Update posts.
- Delete posts.
- Retrieve related data using Sequelize eager loading (include).

Database Relationship

This project implements a One-to-Many relationship between the User and Post models.

- One user can create multiple posts.
- Each post belongs to one user.
- The userId foreign key connects each post to its respective user.

The relationship is implemented using Sequelize associations:

- User.hasMany(Post)
- Post.belongsTo(User)

## API Endpoints

### User Routes

Method         |         Endpoint                 |           Description 

POST           |         /newUser                 |           Create a new user 
GET            |         /getAllUsers            |           Get all users
GET            |         /getOneUser/:id          |           Get a user by ID
PATCH          |         /updateUser/:id          |           Update a user
DELETE         |         /deleteUser/:id          |           Delete a user 

### Post Routes

| Method       |         Endpoint                 |           Description

POST           |         /newPost                 |           Create a new post
GET            |         /allPosts                |           Get all posts
GET            |         /getOnePost/:id          |           Get a post by ID
PATCH          |         /updatePost/:id          |           Update a post
DELETE         |         /deletePost/:id          |           Delete a post

*Note: Add the route prefixes used in your main application file when constructing the complete API URLs.*

Installation and Setup

1. Clone this repository:

   git clone https://github.com/abahVictony/sequelize-relationships-api.git
   
2. Navigate into the project folder:

3. Install dependencies:

   (Terminal)
   npm install
   

4. Start the application using your configured start command.

5. Ensure your MySQL server is running and that the database connection details in your Sequelize configuration are correct.

API Testing

The endpoints were tested using Post Man to verify CRUD operations, database interactions, and model relationships.

Author

**Abah Victor**

Backend Engineering Trainee | Node.js | Express.js | MySQL | Sequelize ORM

GitHub: https://github.com/abahVictony

LinkedIn: https://www.linkedin.com/in/abah-victor-71b40642b


Built as part of my continuous journey in backend engineering, learning and building practical projects.
