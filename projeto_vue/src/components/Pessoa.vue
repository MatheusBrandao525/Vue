<template>
    <div>
        <div class="corpo">
            <p>{{ descricao_pessoa }}</p>
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
            descricao_pessoa: 'Tenho 20 anos, estou no último semestre de análise e Desenvolvimento de Sistemas, na Claretiano rede de Educação, ao longo dos anos adquiri conhecimento em linguagens e frameworks de programação, porem ainda não tive uma oportunidade para atuar profissionalmente na área, mas me dedico cada dia em projetos pessoais, cursos e aulas para um dia ser o melhor!!'
        }
    }
}
</script>

<style scoped>

.corpo{
    display: flex;
    justify-content: center;
}

p{
    margin-top: 2rem;
    text-align: center;
    width: 650px;
    font-size: 1.4rem;
    height: 22rem;
}
</style>