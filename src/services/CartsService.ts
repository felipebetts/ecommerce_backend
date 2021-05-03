import { getCustomRepository, Repository } from "typeorm";
import { Cart } from "../entities/Cart";
import { CartsRepository } from "../repositories/CartsRepository";
import { ProductsService } from "./ProductsService";


interface ICartsAdd {
    user_id: string
    product_id: string
}

export class CartsService {
    private cartsRepository: Repository<Cart>

    constructor() {
        this.cartsRepository = getCustomRepository(CartsRepository)
    }

    async addToCart({ user_id, product_id}: ICartsAdd) {
        // verificar se produto já está no carrinho:
        const productAlreadyInCart = await this.cartsRepository.findOne({
            user_id,
            product_id
        })

        if (productAlreadyInCart) {
            return productAlreadyInCart
        }

        const productInCart = this.cartsRepository.create({
            user_id,
            product_id
        })

        await this.cartsRepository.save(productInCart)

        return productInCart
    }

    async listByUser(user_id: string) {

        const productsService = new ProductsService()

        const cartList = await this.cartsRepository.find({
            user_id
        })

        const productIdArray = cartList.map((e, i) => (e.product_id))

        const productList = [] // productIdArray.map(async (e, i) => await productsService.getById(e))

        for (let i = 0; i < productIdArray.length; i++) {
            let product = await productsService.getById(productIdArray[i])
            productList.push(product)
        }

        // const product = await productsService.getById(productIdArray[0])

        // console.log(product)

        return productList
    }

}