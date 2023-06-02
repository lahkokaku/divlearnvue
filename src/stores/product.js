import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    productList: []
  }),
  getters: {
    productListLength() {
      return this.productList.length
    }
  },
  actions: {
    async setProductList() {
      let response = await axios
        .get('http://localhost:3000/products')
        .catch((error) => console.log(error))
      console.log(response)
      this.productList = response.data
    },
    async addProduct(productName) {
      const id = this.productListLength + 1
      let response = await axios
        .post('http://localhost:3000/products', { id: id, name: productName })
        .catch((error) => console.log(error))
      console.log(response)
    },
    async deleteProduct(id) {
      let response = await axios
        .delete('http://localhost:3000/products/' + id)
        .catch((error) => console.log(error))
      console.log(response)
    },
    async updateProduct(id, name) {
      let response = await axios
        .patch('http://localhost:3000/products/' + id, { name: name })
        .catch((error) => console.log(error))
      console.log(response)
    },
    async getProduct(id) {
      let response = await axios
        .get('http://localhost:3000/products/' + id)
        .catch((error) => console.log(error))
      console.log(response.data)
      return response.data
    }
  }
})
