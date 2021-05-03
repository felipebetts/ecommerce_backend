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
}