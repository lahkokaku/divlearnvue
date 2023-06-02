<script setup>
defineProps({
  input: {
    type: String,
    required: true
  },
  toogleShow: {
    type: Function
  }
})
defineEmits({
  update: {
    input: {}
  }
})
</script>

<template>
  <main>
    <h2>Ini Component</h2>
    <input
      type="text"
      name=""
      id=""
      :value="input"
      @input="$emit('update:input', $event.target.value)"
    />
    <button @click="toogleShow">Toogle Show di Child Component</button>
    <slot>Ga diisi</slot>
  </main>
</template>
