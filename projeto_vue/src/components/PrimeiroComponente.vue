<template>
    <h1>Bem-vindo!</h1>
    <p>Meu nome é: {{ nome }}, e sou {{ profissao }}</p>
</template>

<script>
    export default {
        name: 'PrimeiroComponente',
        data() {
            return {
                 nome: 'Matheus',
                 profissao: 'Programador'
            }
        }
    
    }
</script>

<style scoped>
    h1, p {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        text-align: center;
    }
</style>