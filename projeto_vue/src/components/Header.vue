<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css">
          
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tecnologias</a></li>
        <li class="imgAvatar">
            <Picture/>
        </li>
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
        margin-top: 1rem;
        list-style: none;
        display: flex;
        height: 160px;
        justify-content: space-around;
        box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 40%);
        align-items: center;
    }

    li {
        height: auto;
    }


    a {
        color: #DDD;
        text-decoration: none;
        transition: .5s;
        font-size: 1.5rem;
        font-weight: bold;
        border-radius: 10px;
        padding: 0.5rem;
    }

    a:hover {
        color: 	#213f2f;
        background-color: #3CB371;
        box-shadow: 0 0.1rem 0.8rem rgba(17, 201, 145, 0.4);
    }

    img {
        width: 180px;
        height: 180px;
        border: 0.80rem solid 	#3CB371;
    }

</style>