<template>
    <div class="bemvindo">
        <h1>Bem-vindo!</h1>
    </div>

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
        width: 100%;
    }

    .bemvindo{
        margin-top: 1rem;
        text-align: center !important;
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
    }
</style>