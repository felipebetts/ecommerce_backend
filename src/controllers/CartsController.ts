import { Request, Response } from "express";
import { CartsService } from "../services/CartsService";


export class CartsController {
    async addToCart(req: Request, res: Response) {
        const { user_id, product_id } = req.body

        const cartsService = new CartsService()

        const productInCart = await cartsService.addToCart({
            user_id,
            product_id
        })

        return res.json(productInCart)
    }

    async removeFromCart(req: Request, res: Response) {
        const { user_id, product_id, remove_all } = req.body

        const cartsService = new CartsService()

        const productRemovedFromCart = await cartsService.removeFromCart({
            user_id,
            product_id,
            remove_all
        })

        return res.json(productRemovedFromCart)
    }

    async listByUser(req: Request, res: Response) {
        const { user_id } = req.params

        const cartsService = new CartsService()

        const cartProductsList = await cartsService.listByUser(user_id)

        return res.json(cartProductsList)
    }
}