import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', userRouter)

app.get('/', async (req: Request, res: Response) => {
  // await userService.createUser({
  //   id: '999',
  //   password: '343',
  //   role: 'Student'
  // })
  res.send('Working')
})

export default app
