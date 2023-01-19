<template>
    <div>
        <div class="corpo">
            <p>{{ descricao_pessoa }}</p>
        </div>
        <div class="centro">
            <ul>
                <li><a v-bind:href="link_linkedIn" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
                <li><a v-bind:href="link_git" target="_blank"><i class="fa fa-github"></i></a></li>
                <li><a v-bind:href="link_insta" target="_blank"><i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>
        <Info />
        <Form />
    </div>
</template>

<script>

import Info from './Info.vue';
import Form from './Form.vue';


export default {
    name: 'Pessoa',
    components:{
        Info,
        Form
    },
        data() {
            return {
            descricao_pessoa: 'Tenho 20 anos, estou no último semestre de análise e Desenvolvimento de Sistemas, na Claretiano rede de Educação, ao longo dos anos adquiri conhecimento em linguagens e frameworks de programação, porem ainda não tive uma oportunidade para atuar profissionalmente na área, mas me dedico cada dia em projetos pessoais, cursos e aulas para um dia ser o melhor!!',
            link_git: 'https://github.com/MatheusBrandao525',
            link_linkedIn: 'https://www.linkedin.com/in/matheus-f-brandao-03081a1a7',
            link_insta: 'https://www.instagram.com/matheusfelipebrandrao/'
        }
    }
}
</script>

<style scoped>

.corpo,.centro{
    display: flex;
    justify-content: center;
}

.centro{
    padding: 2rem 0;
}

ul{
    width: 450px;
    display: flex;
    justify-content: space-evenly;
}

li{
    font-size: 2.4rem;
    list-style: none;
}

p{
    margin-top: 2rem;
    text-align: center;
    width: 650px;
    font-size: 1.4rem;
    height: 18rem;
}

a{
    color: #3CB371;
    cursor: pointer;
}
</style>