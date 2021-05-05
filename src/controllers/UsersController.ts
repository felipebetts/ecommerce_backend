import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";


export class UsersController {
    async create(req: Request, res: Response) {

        const { email, password } = req.body

        const usersService = new UsersService()

        const user = await usersService.create({ email, password })

        return res.json(user)
    }

    async login(req: Request, res: Response) {

        const { usernameOrEmail, password } = req.body

        const usersService = new UsersService()

        const userWithToken = await usersService.login({
            usernameOrEmail,
            password
        })

        return res.json(userWithToken)
    }
}