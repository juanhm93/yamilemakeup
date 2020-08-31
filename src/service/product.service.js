import API from './config'

const ProductService = {

    getAll : () => new Promise(

        (resolve , reject) => {
            API.get('products')
            .then(
                res => res.data    
            )
            .then(
                data => resolve(data)
            )
            .catch(
                err => reject(err)
            )
        }

    ),
    get : (id) => new Promise(

        (resolve , reject) => {
            API.get('product/' + id)
            .then(
                response => resolve(response.data.product)
            )
            .catch(
                err => err
            )
        }

    ),
    addProduct : (product) => new Promise(

        (resolve ,reject)=>{
            
            API.post('save-product' , product)
            .then(
                response => response
            ).then(
                data => resolve(data)
            )
            .catch(
                err => reject(err)
            )


        }
    ),
    updateProduct : (product) => new Promise(

        (resolve , reject) =>{
            API.put('product/' + product._id , product)
            .then(
                res => res
            )
            .then(
                data => resolve(data)
            )
            .catch(
                err => reject(err)
            )
        }
    ),
    deleteProduct : (id) => new Promise(

        ( resolve , reject) => {

            API.delete('product/' + id)
            .then(
                res => res
            )
            .then(
                data => resolve(data)
            )
            .catch(
                err => reject(err)
            )
        }
    ),
    


}

export default ProductService