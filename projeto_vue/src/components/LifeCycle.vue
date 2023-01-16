<template>
    <h1>Meu nome: {{ nome }}</h1>
</template>

<script>

    export default {
        name: "LifeCycle",
        data() {
            return {
                nome: 'Matheus'
            }
        },

        methods: {
            lifeCycle() {
                console.log('Executou');
            }
        }
    }
</script>