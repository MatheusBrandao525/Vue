<template>
    <div>
        <p v-if="esta_trabalhando">Estou Trabalhando.</p>
        <p v-else>Estou buscando uma oportunidade.</p>

        <p>utilizo as seguintes tecnologias:</p>
        <ul>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <h3>HTML</h3>
            </li>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <h3>CSS</h3>
            </li>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <h3>JavaScript</h3>
            </li>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" /> 
                <h3>PHP </h3>
            </li>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                <h3>MySQL</h3>
            </li>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                <h3>MongoDB</h3>
            </li>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
                <h3>Flutter</h3>        
            </li>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <h3>React</h3>
            </li>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                <h3>Bootstrap</h3>        
            </li>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                <h3>Vue.js</h3>   
            </li>
            <li>
                <img class="imgTecnologias" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <h3>Node.js</h3>
            </li>
        </ul>

        <div>
            <button @click="mostrar">{{ textoBotao }}</button>
        </div>
        
        <p v-show="mostrar_email">Mande uma menssagem para : {{ email }}</p>
        <p>Este é o link para meu portfólio: <a v-bind:href="meu_portfolio" target="_blank">clique aqui!</a></p>
    </div>
</template>

<script>


    export default {
        name: 'Info',
/*         components: {
            Picture
        }, */
        data() {
            return {
                esta_trabalhando: false,
                mostrar_email: false,
                email: 'brandao.matheus.dev@gmail.com',
                meu_portfolio: 'https://brandaodev.com.br',
                textoBotao: 'Mostrar email'
            }
        },
        methods: {
            mostrar() {
                this.mostrar_email = !this.mostrar_email
                if(!this.mostrar_email){
                    this.textoBotao = 'Mostrar email'
                }else{
                    this.textoBotao = 'Esconder email'
                }
            }
        }
    }
</script>


<style scoped>

ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 160px;
    margin: 2rem 0;
    box-shadow: 0 0.1rem 0.8rem rgba(21, 24, 23, 0.4);
}

li{
    list-style: none;
    display: block;
}

h3{
    text-align:center;
}

.imgTecnologias{
    width: 100px;

}

img{
    border-radius: none !important;
}
</style>