<template>
    <div id="tecnologias">
        <p v-if="esta_trabalhando">Estou Trabalhando.</p>
        <p v-else class="umaOportunidade">🚀  Estou buscando uma oportunidade.  🚀</p>

        <div class="centro">
            <p class="bordaInferior">utilizo as seguintes tecnologias:</p>
        </div>
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

<!--         <div class="botao">
            <button @click="mostrar">{{ textoBotao }}</button>
        </div>
        
        <p v-show="mostrar_email">Este é o link para meu portfólio: <a v-bind:href="meu_portfolio" target="_blank">clique aqui!</a></p> -->
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
                textoBotao: 'Link protfólio'
            }
        },
        methods: {
/*             mostrar() {
                this.mostrar_email = !this.mostrar_email
                if(!this.mostrar_email){
                    this.textoBotao = 'Link portfólio'
                }else{
                    this.textoBotao = 'Esconder link'
                }
            } */
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

p{
    font-size: 1.4rem;
    text-align: center;    
}

.bordaInferior{
    width: 450px;
    height: 40px;
    border-bottom: 5px solid #3CB371; 
}

.imgTecnologias{
    width: 100px;

}

.centro{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}

.umaOportunidade{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3CB371;
    height: 80px;
}

img{
    border-radius: none !important;
}

button{
    background-color: #333;
    border: 1px solid #3CB371;
    width: 130px;
    height: 40px;
    color: #3CB371;
    padding: 0.50rem;
    border-radius: 5px;
}

button:hover{
    background-color: #3CB371;
    color: #333; 
    font-weight: bold; 
}

.botao{
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
}

strong{
    color:#3CB371;
}
</style>