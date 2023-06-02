<script setup>
import { useProductStore } from '../stores/product'
import { ref } from 'vue'
import ProductList from '@/components/ProductList.vue'

const productStore = useProductStore()

const newProduct = ref({})

function addProduct() {
  productStore.addProduct(this.newProduct.name)
  this.newProduct.name = ''
  productStore.setProductList()
}
</script>

<template>
  <main>
    <div class="container">
      <product-list></product-list>
      <div class="card px-5 py-5 w-50">
        <form @submit.prevent>
          <div class="my-2">
            <label for="" class="form label">Product Name</label>
            <input type="text" name="" id="" class="form-control" v-model="newProduct.name" />
          </div>
          <div>
            <button class="btn btn-success" @click="addProduct()">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
