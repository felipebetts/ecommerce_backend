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
    
    async getProducts (req: Request, res: Response) {
        const { limit } = req.params
        const { cursor } = req.body
        
        const productsService = new ProductsService()

        const products = await productsService.getProducts({
            limit,
            cursor
        })

        return res.json(products)
    }
}