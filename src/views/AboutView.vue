<script setup>
import { useCounterStore } from '../stores/counter'

defineProps({
  value: {},
  value2: {}
})
const counterStore = useCounterStore()
</script>

<template>
  <main class="about">
    <h1>{{ value }} - {{ value2 }}</h1>
    <hr />
    <p>Count</p>
    {{ counterStore.count }}
    <br />
    <p>Double Count:</p>
    {{ counterStore.doubleCount }}
    <br />
    <button @click="counterStore.increment">Increment</button>
    <br />
    <p>Product Length:</p>
    {{ counterStore.productLength }}
  </main>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
