import { Router } from "express"
import { UsersController } from "../controllers/UsersController"



const router = Router()

const usersController = new UsersController()

router.post('/', usersController.create)
router.post('/login', usersController.login)
router.post('/validate', usersController.validateToken)

router.get('/', usersController.getAll)
router.get('/:id', usersController.getById)

router.delete('/:id', usersController.delete)

export default app => app.use('/users', router)