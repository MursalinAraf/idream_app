const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./Routes/user/user');
const blogRoutes = require('./Routes/blog/blog')
const db = require('./config/connection')
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json());

app.use('/blogs',blogRoutes)
app.use('/user',userRoutes)

db.authenticate().then(() => {
    console.log('Database Connected.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})