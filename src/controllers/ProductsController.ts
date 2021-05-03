import { Request, Response } from "express";
import { ProductsService } from "../services/ProductsService";


export class ProductsController {
    async create (req: Request, res: Response) {
        const {
            name,
            price,
            sales,
            variant,
            description
        } = req.body

        const productsService = new ProductsService()

        const product = await productsService.create({
            name,
            price,
            sales,
            variant,
            description
        })

        return res.json(product)
    }
}