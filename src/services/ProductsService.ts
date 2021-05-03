import { getCustomRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";
import { ProductsRepository } from "../repositories/ProductsRepository";

interface IProductsCreate {
    name: string
    price: number
    sales?: number
    variant?: [string]
    description: string
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
}