import express, { Request, Response } from 'express'
import { userRouter } from './app/modules/user/user.router'
import cors from 'cors'
import { collageRouter } from './app/modules/university/college.router'
export const app = express()

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://connect-campus-five.vercel.app'

  ],
  credentials: true
}))
app.use(express.json())

// routes
app.use('/api/user', userRouter)
app.use('/api/collage', collageRouter)


app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({
        massage:"Welcome to tour connect campus backend"
    })
})