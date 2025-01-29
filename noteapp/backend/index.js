import express from 'express'
// const express = require('express')

import cors from 'cors'

import authRouter from './routes/auth.js'
import connectToMongoDB from './db/db.js'

/**
 * The express() function is called to create an Express application. The app object represents your web server and will be used to define routes, middleware, and configure settings.
 * 
 */
const app = express()
// app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)

/**
 * The app.listen() function starts the server and listens on port 5000. When the server starts successfully, it logs the message "Server is running" to the console.
 * 
 */
app.listen(5000, () => {
    connectToMongoDB()
    console.log("Server is running")
})