<template>
  <Header/>
  <PrimeiroComponente/>
  <LifeCycle/>
  <Pessoa />
  <Formacao/>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue'
import Pessoa from './components/Pessoa.vue'
import Formacao from './components/Formacao.vue';
import Header from './components/Header.vue'

  export default {
      name: 'App',
      components: {
        Header,
        PrimeiroComponente,
        LifeCycle,
        Pessoa,
        Formacao
      },
    }
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Kalam', cursive;
}

  body {
    background-color: #333;
    color: #fff;
  }

  a {
    color: #f25;
  }



</style>