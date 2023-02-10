<template>
  <Header/>
  <PrimeiroComponente/>
  <LifeCycle/>
  <div class="background">
    <Pessoa />

  </div>
  <Formacao/>
  <Projetos/>
  <Footer/>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';
import Formacao from './components/Formacao.vue';
import Header from './components/Header.vue';
import Projetos from './components/Projetos.vue';
import Footer from './components/Footer.vue';

  export default {
      name: 'App',
      components: {
        Header,
        PrimeiroComponente,
        LifeCycle,
        Pessoa,
        Formacao,
        Projetos,
        Footer
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


.card1 {
  width: 350px;
  height: 400px;
  background: #3cb371;
  margin-bottom: 2rem;
}


.card1:hover {
  justify-content: center;
  transform:scale(1.5);
}

</style>