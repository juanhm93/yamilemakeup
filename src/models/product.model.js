import ProductService from "../service/product.service";

export class Product {

    constructor(
        id,
        title,
        code,
        descriptions,
        image 
    ){
        this.id = id 
        this.title = title
        this.code = code 
        this.descriptions = descriptions
        this. image = image
    }

}

export default Product