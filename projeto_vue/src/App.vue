<template>
  <PrimeiroComponente/>
  <p>O estado da aplicação é: {{ testando }}</p>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';

  export default {
      name: 'App',
      components: {
        PrimeiroComponente
      },
      data() {
        return {
          testando: 'Teste'
        }
      }
    }
</script>