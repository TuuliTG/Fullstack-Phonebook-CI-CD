require('dotenv').config()
const app = require('./app')
const logger = require('./utils/logger')
const config = require('./utils/config')


//const morgan = require('morgan')

//morgan.token('content', (request) => {
//  return JSON.stringify(request.body)
//})

//app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

