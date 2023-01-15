<template>
  <PrimeiroComponente/>
  <p>O estado da aplicação é: {{ testando }}</p>
  <LifeCycle/>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue'

  export default {
      name: 'App',
      components: {
        PrimeiroComponente,
        LifeCycle
      },
      data() {
        return {
          testando: 'Teste'
        }
      }
    }
</script>