<template>
    <h1>Olá Vue!</h1>
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