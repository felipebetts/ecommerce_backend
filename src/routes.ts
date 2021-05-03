import { Router } from "express";
import { CartsController } from "./controllers/CartsController";
import { ProductsController } from "./controllers/ProductsController";
import { UsersController } from "./controllers/UsersController";


const routes = Router()

const usersController = new UsersController()
const productsController = new ProductsController()
const cartsController = new CartsController()

routes.post('/users/create', usersController.create)

routes.post('/products/create', productsController.create)

routes.post('/carts/add', cartsController.addToCart)


export { routes }