import { Router } from "express"
import { ProductsController } from "../controllers/ProductsController"


const router = Router()

const productsController = new ProductsController()

router.post('/', productsController.create)

router.get('/:id', productsController.getById)
router.get('/date/:limit', productsController.getProductsByDate)
router.get('/price/:limit', productsController.getProductsByPrice)

router.delete('/:id', productsController.delete)

export default app => app.use('/products', router)