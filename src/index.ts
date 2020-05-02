import express from 'express'
import expressServer from './express'
import cors from 'cors'

const app: any = express()

// using cross origin policy
app.use(cors())

// run express restful api && express microServices
expressServer(app)
