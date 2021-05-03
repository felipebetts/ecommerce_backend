import { getCustomRepository, Repository } from "typeorm";
import { Cart } from "../entities/Cart";
import { CartsRepository } from "../repositories/CartsRepository";


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

}