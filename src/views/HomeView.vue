<script setup>
import { useProductStore } from '../stores/product'
const store = useProductStore()
</script>

<template>
  <main>
    <h1>Product List</h1>
    <li v-for="(product, index) in store.productList" :key="index">
      {{ product.name }} | ${{ product.price }}
    </li>
    <p>Total Productos: {{ store.totalProducts }}</p>
  </main>
</template>
