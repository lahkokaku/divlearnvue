<script setup>
import { onMounted, ref } from 'vue'
import { useProductStore } from '../stores/product'
import router from '@/router'

const props = defineProps({
  id: {
    required: true
  }
})

const productStore = useProductStore()
const updatedProduct = ref({})
const selectedProduct = ref({})

function updateProduct(id, name) {
  productStore.updateProduct(id, name)
  location.reload()
}
onMounted(async () => {
  selectedProduct.value = await productStore.getProduct(props.id)
  console.log(selectedProduct.value)
})
</script>

<template>
  <div class="container px-5 py-5">
    <button class="btn btn-primary" @click="router.push({ name: 'product' })">Back</button>
    <form action="" class="card px-5 py-5" @submit.prevent>
      <div class="my-2">
        <label for="" class="form label">Old Product Name</label>:
        <label for="" class="form label">{{ selectedProduct.name }}</label>
      </div>
      <div class="my-2">
        <label for="" class="form label">New Product Name</label>:
        <input type="text" class="form-control" v-model="updatedProduct.name" />
      </div>
      <div>
        <button
          class="btn btn-primary"
          @click="updateProduct(selectedProduct.id, updatedProduct.name)"
        >
          Update Product
        </button>
      </div>
    </form>
  </div>
</template>
