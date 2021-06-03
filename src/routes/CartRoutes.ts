import { Router } from "express"
import { CartsController } from "../controllers/CartsController"


const router = Router()

const cartsController = new CartsController()

router.post('/add', cartsController.addToCart)
router.delete('/remove', cartsController.removeFromCart)
router.get('/:user_id', cartsController.listByUser)

export default app => app.use('/carts', router)