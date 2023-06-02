<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/product'
import router from '../router'

const productStore = useProductStore()

function deleteProduct(id) {
  productStore.deleteProduct(id)
  productStore.setProductList()
}

onMounted(() => {
  productStore.setProductList()
})
</script>

<template>
  <div class="card px-5 py-5 mb-5">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Product ID</th>
          <th>Product Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productStore.productList" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>
            <button
              class="btn btn-primary mx-2"
              @click="router.push({ name: 'updateProduct', params: { id: product.id } })"
            >
              Update
            </button>
            <button class="btn btn-danger mx-2" @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
