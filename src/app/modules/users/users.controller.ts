import { Request, Response } from 'express'
import userService from './users.service'

export const createUser = async (req: Request, res: Response) => {
  // console.log(req.body)
  try {
    const { user } = req.body
    const result = await userService.createUser(user)

    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    })
  }
}

export default createUser
