import app from './app.js'

const main = async () => {
  try {
    const port = app.get('port')
    app.listen(port)
    console.log('Server listening on port', app.get('port'))
  } catch (error) {
    throw new Error(error.message)
  }
}

main()
