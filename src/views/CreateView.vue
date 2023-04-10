<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/product.js'

const state = useProductStore()
const name = ref('');
const price = ref(null);
const imgUrl = ref('');

function createProduct() {
  const newProduct = {
    name: name.value,
    price: price.value,
    imgUrl: imgUrl.value
  }
  console.log('New Product', newProduct);
  state.addProduct(newProduct)
  clearProduct();
}
function clearProduct() {
  name.value = '';
  price.value = null;
  imgUrl.value = '';
}

</script>

<template>
  <div class="create">
    <h1>Nuevo Producto</h1>
    <p>Nombre:</p>
    <br>
    <input type="text" placeholder="" v-model="name">
    <p>Precio:</p>
    <input type="number" placeholder="" v-model="price">
    <!-- <p>Imagen Url:</p>
    <input type="text" placeholder="url"> -->
    <hr>
    <button @click="createProduct">Guardar</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .create {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
