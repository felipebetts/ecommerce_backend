import { Request, Response } from "express";
import { UsersService } from "../services/UsersServices";


export class UsersController {
    async create(req: Request, res: Response) {

        const { email, password } = req.body

        const usersService = new UsersService()

        const user = await usersService.create({ email, password })

        return res.json(user)
    }
}