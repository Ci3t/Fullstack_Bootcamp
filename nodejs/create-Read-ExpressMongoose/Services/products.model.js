import mongoose from "mongoose";
import { productsSchema } from "./products.schema.js";


export const Product = new mongoose.model('Product',productsSchema)