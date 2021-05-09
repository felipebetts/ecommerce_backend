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
    
    async getProductsByDate (req: Request, res: Response) {
        const { limit } = req.params
        const { cursor } = req.body
        
        const productsService = new ProductsService()

        const products = await productsService.getProductsByDate({
            limit,
            cursor
        })

        return res.json(products)
    }

    async getProductsByPrice (req: Request, res: Response) {
        const { limit } = req.params
        const { cursor } = req.body
        
        const productsService = new ProductsService()

        const products = await productsService.getProductsByPrice({
            limit,
            cursor
        })

        return res.json(products)
    }

    async getById (req: Request, res: Response) {
        const { id } = req.params

        const productsService = new ProductsService()

        const product = await productsService.getById(id)

        return res.json(product)
    }
}