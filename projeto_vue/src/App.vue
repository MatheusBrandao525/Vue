<template>
  <Header/>
  <PrimeiroComponente/>
  <LifeCycle/>
  <div class="background">
    <Pessoa />

  </div>
  <Formacao/>
  <Projetos/>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';
import Formacao from './components/Formacao.vue';
import Header from './components/Header.vue';
import Projetos from './components/Projetos.vue';

  export default {
      name: 'App',
      components: {
        Header,
        PrimeiroComponente,
        LifeCycle,
        Pessoa,
        Formacao,
        Projetos
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
  scroll-behavior: smooth;
}

  body {
    background-color: #333;
    color: #fff;
  }

  a {
    color: #f25;
  }

  .row{
    display: flex;
    justify-content: space-evenly;
}

.card{
    width: 350px;
    height: 400px;
    background: #3CB371;
    margin-bottom: 2rem;
}



</style>