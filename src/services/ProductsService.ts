import { getConnection, getCustomRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";
import { ProductsRepository } from "../repositories/ProductsRepository";
import multer from 'multer'

interface IProductsCreate {
    name: string
    price: number
    sales?: number
    variant?: [string]
    description: string
    imageSrc ?: [string]
}

interface IProductsPaginated {
    limit: string
    cursor?: string
}

export class ProductsService {
    private productsRepository: Repository<Product>

    constructor() {
        this.productsRepository = getCustomRepository(ProductsRepository)
    }

    async create({
        name,
        price,
        sales = 0,
        description
    }: IProductsCreate) {

        const product = this.productsRepository.create({
            name,
            price,
            description,
            sales,
        })

        await this.productsRepository.save(product)

        return product
    }

    async getById(id: string) {
        const product = await this.productsRepository.findOne({
            id
        })

        return product
    }

    async getProducts({ limit, cursor }: IProductsPaginated) {

        const realLimit = Math.min(50, parseInt(limit))
        const realLimitPlusOne = realLimit + 1

        const replacements: any[] = [realLimitPlusOne]

        if (cursor) {
            replacements.push(new Date((cursor)))
        }

        const products = await getConnection().query(`
            select p.*
            from products p
            ${cursor ? `where p.created_at < $2` : "" /* o $1 aponta para o array que vamos declarar apos a query */}
            order by p.created_at DESC
            limit $1
        `, replacements)
        console.log(replacements)

        return {
            products: products.slice(0, realLimit),
            hasMore: products.length === realLimitPlusOne
        }
    }

    async uploadProductPics () {
        const upload = multer({
            dest: '/public/images'
        })
    }
}