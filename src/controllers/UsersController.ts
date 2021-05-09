import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";


export class UsersController {
    async create(req: Request, res: Response) {

        const { name, email, password } = req.body

        const usersService = new UsersService()

        const user = await usersService.create({ name, email, password })

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

    async validateToken(req: Request, res: Response) {
        const { token } = req.body

        const usersService = new UsersService()

        const response = await usersService.validateToken(token)

        return res.json(response)
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params

        const usersService = new UsersService()

        const user = await usersService.getById(id)

        return res.json(user)
    }
}