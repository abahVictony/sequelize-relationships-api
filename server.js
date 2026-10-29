const express = require('express')
const PORT = 6666
const sequelize = require('./database/database')

const userRouter = require('./routers/userRouter.js')
const postRouter = require('./routers/postRouter.js')
const app = express()

app.use(express.json())
app.use(userRouter)
app.use(postRouter)

const databaseConnection = async()=>{
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error.message);
}
} 

databaseConnection()


app.listen(PORT, ()=>{
    console.log(`Server is Running at PORT: ${PORT}`);
})