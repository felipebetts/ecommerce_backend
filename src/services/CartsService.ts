import { getCustomRepository, Repository } from "typeorm";
import { Cart } from "../entities/Cart";
import { CartsRepository } from "../repositories/CartsRepository";
import { ProductsService } from "./ProductsService";


interface ICartsAdd {
    user_id: string
    product_id: string
}

interface ICartsDelete {
    user_id: string
    product_id: string
    remove_all?: boolean
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
            // console.log('productAlreadyInCart: ', productAlreadyInCart)
            const newProductQuantity = {
                ...productAlreadyInCart,
                quantity: productAlreadyInCart.quantity + 1
            }
            await this.cartsRepository.update({
                id: productAlreadyInCart.id
            }, newProductQuantity)

            return  {
                message: 'Mais uma unidade adicionada ao carrinho'
            }
        }

        const productInCart = this.cartsRepository.create({
            user_id,
            product_id
        })

        const itemInCart = await this.cartsRepository.save(productInCart)
        // console.log('itemInCart: ', itemInCart)

        return {
            message: 'Item adicionado ao carrinho com sucesso!'
        }
    }

    async removeFromCart({ user_id, product_id, remove_all }: ICartsDelete) {

        // verificar se o produto citado está no carrinho de fato
        const isProductInCart = await this.cartsRepository.findOne({
            user_id,
            product_id
        })

        if (isProductInCart) {
            console.log('isProductInCart: ', isProductInCart)
            
            if (remove_all || isProductInCart.quantity === 1) {
                await this.cartsRepository.delete({
                    id: isProductInCart.id
                })
                return {
                    message: 'Item removido do carrinho com sucesso'
                }
            } else {
                const newProductQuantity = {
                    ...isProductInCart,
                    quantity: isProductInCart.quantity - 1
                }
                
                const updatedProduct = await this.cartsRepository.update({
                    id: isProductInCart.id
                }, newProductQuantity)
                
                
                console.log('updatedProduct: ', updatedProduct)

                return {
                    message: 'Uma unidade do item removida do carrinho com sucesso'
                }
            }
        } else {
            return {
                message: 'Item não está no carrinho'
            }
        }
    }

    async listByUser(user_id: string) {

        const productsService = new ProductsService()

        const cartList = await this.cartsRepository.find({
            user_id
        })

        const productIdArray = cartList.map((e, i) => (e.product_id))
        const productQuantityArray = cartList.map((e, i) => (e.quantity))

        const productList = [] // productIdArray.map(async (e, i) => await productsService.getById(e))

        for (let i = 0; i < productIdArray.length; i++) {
            let product = await productsService.getById(productIdArray[i])
            let productWithQuantity = {
                ...product,
                quantity: productQuantityArray[i]
            }
            productList.push(productWithQuantity)
        }

        // const product = await productsService.getById(productIdArray[0])

        // console.log(product)

        return productList
    }

}