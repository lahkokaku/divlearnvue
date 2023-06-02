<script setup>
import { ref } from 'vue'
import TestComponent from '../components/TestComponent.vue'
const test = ref('hello world')
const list = ref(['A', 'B', 'C'])
const selectedValue = ref('')
const condition = ref(1)
const show = ref(true)
const testInput = ref('')
const validationMessage = ref('')

function toogleShow() {
  show.value = !show.value
}
function validateInput() {
  if (testInput.value.length < 8) {
    validationMessage.value = 'Must at least be 8 characters'
  } else {
    validationMessage.value = ''
  }
}
</script>

<template>
  <main>
    <h1>Home</h1>
    <div>
      {{ test }}
    </div>
    <div>
      <p>{{ selectedValue }}</p>
    </div>
    <div>
      <select name="" id="" v-model="selectedValue">
        <option v-for="(item, index) in list" :key="index" :value="item">{{ item }}</option>
      </select>
    </div>
    <div v-if="condition == 1">
      <h2>If</h2>
    </div>
    <div v-else-if="condition == 2">
      <h2>Else If</h2>
    </div>
    <div v-else>
      <h2>Else</h2>
    </div>
    <button v-on:click="toogleShow()">Toogle Show</button>
    <div v-show="show">
      <h2>Show</h2>
    </div>
    <form action="" @click="console.log('test')" @submit.prevent>
      <button>Submit</button>
    </form>
    <input type="text" v-model="testInput" @keyup="validateInput" />
    <div>
      {{ validationMessage }}
    </div>
    <test-component v-model:input="testInput" :toogleShow="toogleShow"
      ><h2>Ini Slot</h2></test-component
    >
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
