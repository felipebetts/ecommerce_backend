import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";


export class UsersController {
    async create(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
    
            const usersService = new UsersService()
    
            const user = await usersService.create({ name, email, password })
    
            return res.json(user)
        } catch (err) {
            return res.json(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
    
            const usersService = new UsersService()
    
            const hasDeleted = await usersService.delete(id)

            if (hasDeleted.affected === 1) {
                return res.json({
                    message: "Usuário deletado com sucesso!"
                })
            } else {
                return res.json({
                    message: "Usuário não foi deletado ou não existe"
                })
            }
    
        } catch (err) {
            return res.json(err)
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { usernameOrEmail, password } = req.body
    
            const usersService = new UsersService()
    
            const userWithToken = await usersService.login({
                usernameOrEmail,
                password
            })
    
            return res.json(userWithToken)
        } catch (err) {
            return res.json(err)
        }
    }

    async validateToken(req: Request, res: Response) {
        try {
            const { token } = req.body
    
            const usersService = new UsersService()
    
            const response = await usersService.validateToken(token)
    
            return res.json(response)
        } catch (err) {
            return res.json(err)
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params
    
            const usersService = new UsersService()
    
            const user = await usersService.getById(id)
    
            return res.json(user)
        } catch (err) {
            return res.json(err)
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const usersService = new UsersService()
            
            const users = await usersService.getAll()
            
            return res.json(users)
        } catch (err) {
            return res.json(err)
        }
    }
}