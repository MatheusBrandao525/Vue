<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tecnologias</a></li>
        <Picture/>
        <li><a href="#">Formação</a></li>
        <li><a href="#">Projetos</a></li>
    </ul>
</template>

<script>
import Picture from './Picture.vue'
    export default {
        name: 'Header',
        components: {
            Picture
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        height: 160px;
        justify-content: space-evenly;
        box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 40%);
        align-items: center;
    }

    a {
        color: #DDD;
        text-decoration: none;
        transition: .5s;
        font-size: 1.5rem;
        font-weight: bold;
    }

    a:hover {
        color: 	#3CB371;
    }

    img {
        width: 150px;
        height: 150px;
        border: 0.80rem solid 	#3CB371;
    }

</style>