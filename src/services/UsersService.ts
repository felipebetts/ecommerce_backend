import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


interface IUsersCreate {
    name: string
    email: string
    password: string
}

interface IUsersLogin {
    usernameOrEmail: string
    password: string
}

interface IUsersUpdate {
    id: string
    name: string
    email: string
    password: string
}

export class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create({ name, email, password }: IUsersCreate) {

        // antes de criar um novo usuário precisamos verificar se já existe algum usuário cadastrado nesse email
        const userExists = await this.usersRepository.findOne({
            email
        })

        if (userExists) {
            // se já existir um usuário, retornar ele
            return userExists
        }

        // se não existe vamos criar um:
        const salt = bcrypt.genSaltSync()
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = this.usersRepository.create({
            name,
            email,
            password: hashedPassword
        })

        await this.usersRepository.save(user)


        return user
    }

    async login({ usernameOrEmail, password }: IUsersLogin) {

        const user = usernameOrEmail.includes('@') ? await this.usersRepository.findOne({
            where: { email: usernameOrEmail }
        }) : await this.usersRepository.findOne({
            where: { name: usernameOrEmail }
        })

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ data: user }, process.env.AUTH_SECRET, {
                expiresIn: '10 days'
            })
            return {
                ...user,
                token
            }
        } else {
            return {
                errors: [
                    {
                        message: 'Usuario ou senha invalidos'
                    }
                ]
            }
        }
    }

    async validateToken(token: string) {

        if (token) {
            const verify: any = jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
                return {
                    err,
                    decoded
                }
            })
            if (verify.err) {
                return {
                    errors: [
                        {
                            message: verify.err.message
                        }
                    ]
                }
            } else {
                return verify.decoded
            }
        } else {
            return {
                errors: [
                    {
                        message: 'token is null'
                    }
                ] 
            }
        }
    }

    async getById(id: string) {
        const user = this.usersRepository.findOne(id)

        return user
    }

    async update({ id, name, email, password }: IUsersUpdate) {

    }
}