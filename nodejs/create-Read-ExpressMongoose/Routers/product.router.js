import {Router} from 'express'
import { getProducts,postProducts,getProduct,getProductByActive,getProductByPriceRange,patchProduct,delProduct,delAllProducts } from '../controllers/products.js'
export const productRoute = Router()

productRoute.get('/products',getProducts)
productRoute.get('/products/active',getProductByActive)
productRoute.get('/products/price',getProductByPriceRange)
productRoute.get('/products/:id',getProduct)
productRoute.post('/products',postProducts)
productRoute.patch('/products/:id',patchProduct)
productRoute.delete('/products/:id',delProduct)
productRoute.delete('/products/',delAllProducts)
