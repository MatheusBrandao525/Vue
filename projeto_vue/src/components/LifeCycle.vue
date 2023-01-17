<template>
    <h1>Sou o {{ nome }}</h1>
</template>

<script>

    export default {
        name: "LifeCycle",
        data() {
            return {
                nome: 'Matheus F. Brandão'
            }
        },

        methods: {
            lifeCycle() {
                console.log('Executou');
            }
        }
    }
</script>


<style scoped>
    h1{
        text-align: center;
        margin-top: 1rem;
    }
</style> 