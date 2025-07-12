import express, { Request, Response } from 'express'
import { userRouter } from './app/modules/user/user.router'
export const app = express()



// routes
app.use('/api/user', userRouter)


app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({
        massage:"Welcome to tour connect campus backend"
    })
})