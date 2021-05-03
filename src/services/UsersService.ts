import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


interface IUsersCreate {
    email: string
    password: string
}

export class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create({ email, password }: IUsersCreate) {
        
        // antes de criar um novo usuário precisamos verificar se já existe algum usuário cadastrado nesse email
        const userExists = await this.usersRepository.findOne({
            email
        })

        if (userExists) {
            // se já existir um usuário, retornar ele
            return userExists
        }

        console.log(process.env.AUTH_SECRET)

        // se não existe vamos criar um:
        const salt = bcrypt.genSaltSync()
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = this.usersRepository.create({
            email,
            password: hashedPassword
        })

        await this.usersRepository.save(user)


        return user
    }
}