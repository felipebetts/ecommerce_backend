import { Request, Response } from "express";
import { ProductsService } from "../services/ProductsService";


export class ProductsController {
    async create (req: Request, res: Response) {
        try {
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
        } catch (err) {
            return res.json(err)
        }
    }

    async delete (req: Request, res: Response) {
        try {
            const { id } = req.params
    
            const productsService = new ProductsService()
    
            const hasDeleted = await productsService.delete(id)
    
            if (hasDeleted.affected === 1) {
                return res.json({
                    message: "Produto deletado com sucesso!"
                })
            } else {
                return res.json({
                    message: "Produto não foi deletado ou não existe"
                })
            }
        } catch (err) {
            return res.json(err)
        }

    }
    
    async getProductsByDate (req: Request, res: Response) {
        try {
            const { limit } = req.params
            const { cursor } = req.body
            
            const productsService = new ProductsService()
    
            const products = await productsService.getProductsByDate({
                limit,
                cursor
            })
    
            return res.json(products)
        } catch (err) {
            return res.json(err)
        }
    }

    async getProductsByPrice (req: Request, res: Response) {
        try {
            const { limit } = req.params
            const { cursor } = req.body
            
            const productsService = new ProductsService()
    
            const products = await productsService.getProductsByPrice({
                limit,
                cursor
            })
    
            return res.json(products)
        } catch (err) {
            return res.json(err)
        }
    }

    async getById (req: Request, res: Response) {
        try {
            const { id } = req.params
    
            const productsService = new ProductsService()
    
            const product = await productsService.getById(id)
    
            return res.json(product)
        } catch (err) {
            return res.json(err)
        }
    }
}