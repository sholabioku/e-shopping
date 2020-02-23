const fs = require('fs')
const path = require('path')

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
)

module.exports = class Cart {
  static addProduct(id) {
    // Fetch the previous cart
    let cart = { products: [], totalPrice: 0 }
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cart = JSON.parse(fileContent)
      }
      //Analyze the cart- find existing product
      const existingProduct = cart.products.find(prod => prod.id === id)
      let updatedProduct
      if (existingProduct) {
        updatedProduct = { ...existingProducts }
        updatedProduct.qty = updatedProduct.qty + 1
      }
    })
    //Add new product or increase quantity
  }
}
