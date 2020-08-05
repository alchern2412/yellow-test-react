const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 8080;
const app = express();


// Init Middleware
app.use(express.json({ extended: false }))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder 
  app.use(express.static('build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}





