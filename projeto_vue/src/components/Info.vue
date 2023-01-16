<template>
    <div>
        <p v-if="esta_trabalhando">Estou Trabalhando.</p>
        <p v-else>Estou buscando uma oportunidade.</p>

        <p>utilizo as seguintes tecnologias:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Flutter</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Vue.js</li>
            <li>Node.js</li>
        </ul>

        <p v-show="mostrar_email">Mande uma menssagem para : {{ email }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: false,
                mostrar_email: true,
                email: 'brandao.matheus.dev@gmail.com'
            }
        }
    }
</script>