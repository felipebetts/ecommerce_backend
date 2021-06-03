import CartRoutes from './CartRoutes'
import ProductRoutes from './ProductRoutes'
import  UserRoutes from './UserRoutes'



export default app => {
    UserRoutes(app)
    ProductRoutes(app)
    CartRoutes(app)
}