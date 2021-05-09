import { Router } from "express";
import { CartsController } from "./controllers/CartsController";
import { ProductsController } from "./controllers/ProductsController";
import { UsersController } from "./controllers/UsersController";


const routes = Router()

const usersController = new UsersController()
const productsController = new ProductsController()
const cartsController = new CartsController()

routes.post('/users/create', usersController.create)
routes.post('/users/login', usersController.login)
routes.post('/users/validate', usersController.validateToken)
routes.get('/users/:id', usersController.getById)

routes.post('/products/create', productsController.create)
routes.get('/products/:id', productsController.getById)
routes.get('/products/date/:limit', productsController.getProductsByDate)
routes.get('/products/price/:limit', productsController.getProductsByPrice)

routes.post('/carts/add', cartsController.addToCart)
routes.delete('/carts/remove', cartsController.removeFromCart)
routes.get('/carts/:user_id', cartsController.listByUser)


export { routes }