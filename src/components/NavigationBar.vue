<script setup></script>

<template>
  <nav class="py-2">
    <router-link :to="{ name: 'home' }" class="mx-2"><p>Home</p></router-link> |
    <!-- <router-link :to="'/about'+ '/' + 3"><p>About</p></router-link> -->
    <router-link :to="{ name: 'about', params: { value: 2, value2: 3 } }" class="mx-2"><p>About</p></router-link>
    |
    <router-link :to="{ name: 'product' }" class="mx-2"><p>Product</p></router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
}
</style>
