<template>
  <Header/>
  <PrimeiroComponente/>
  <p>O estado da aplicação é: {{ testando }}</p>
  <LifeCycle/>
  <Pessoa />
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue'
import Pessoa from './components/Pessoa.vue'
import Header from './components/Header.vue'

  export default {
      name: 'App',
      components: {
        Header,
        PrimeiroComponente,
        LifeCycle,
        Pessoa
      },
      data() {
        return {
          testando: 'Teste'
        }
      }
    }
</script>


<style>

  body {
    background-color: #333;
    color: #fff;
  }

  a {
    color: #f25;
  }

  img{
    border-radius: 50%;
  }

</style>