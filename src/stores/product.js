import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {

  const productList = ref([
    {
      name: 'MacBook Pro',
      price: 1499.99,
      img: '--',
    }
  ]);
  const totalProducts = computed(() => productList.value.length)
  function addProduct(product) {
    productList.value.push(product)
  }

  return { productList, totalProducts, addProduct }
})
