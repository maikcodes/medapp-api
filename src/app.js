import express from 'express'

const app = express()

// settings
app.set('port', 4000)

// routes
app.get('/hello-server', async (req, res) => {
  res.json({
    status: 'success',
    data: {
      message: 'Hello from server'
    }
  })
})

export default app
