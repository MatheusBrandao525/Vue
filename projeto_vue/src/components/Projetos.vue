<template>
    <div class="centro" id="projetos">
        <h1>Projetos</h1>
    </div>
    <div class="container">
        <div class="row" style="opacity:1;">
            <div class="card">
                <img src="https://image.freepik.com/vetores-gratis/vitrine-de-vidro-cubo-de-plastico-transparente-produto-vazio-ou-exposicao-de-museu-em-forma-de-bloco-com-holofotes-carrinho-de-prisma-para-conjunto-de-vetores-de-exposicao-prisma-de-ilustracao-no-centro-das-atencoes-vitrine-de-exibicao_102902-3478.jpg" alt="">
                <h3>EM BREVE</h3>
            </div>
            <div class="card">
                <img src="https://image.freepik.com/vetores-gratis/vitrine-de-vidro-cubo-de-plastico-transparente-produto-vazio-ou-exposicao-de-museu-em-forma-de-bloco-com-holofotes-carrinho-de-prisma-para-conjunto-de-vetores-de-exposicao-prisma-de-ilustracao-no-centro-das-atencoes-vitrine-de-exibicao_102902-3478.jpg" alt="">
                <h3>EM BREVE</h3>    
            </div>
            <div class="card">
                <img src="https://image.freepik.com/vetores-gratis/vitrine-de-vidro-cubo-de-plastico-transparente-produto-vazio-ou-exposicao-de-museu-em-forma-de-bloco-com-holofotes-carrinho-de-prisma-para-conjunto-de-vetores-de-exposicao-prisma-de-ilustracao-no-centro-das-atencoes-vitrine-de-exibicao_102902-3478.jpg" alt="">  
                <h3>EM BREVE</h3>
            </div>
        </div>
        <div class="row">
            <div class="card">
                <img src="https://image.freepik.com/vetores-gratis/vitrine-de-vidro-cubo-de-plastico-transparente-produto-vazio-ou-exposicao-de-museu-em-forma-de-bloco-com-holofotes-carrinho-de-prisma-para-conjunto-de-vetores-de-exposicao-prisma-de-ilustracao-no-centro-das-atencoes-vitrine-de-exibicao_102902-3478.jpg" alt="">
                <h3>Projeto 01</h3>
            </div>
            <div class="card">
                <img src="https://image.freepik.com/vetores-gratis/vitrine-de-vidro-cubo-de-plastico-transparente-produto-vazio-ou-exposicao-de-museu-em-forma-de-bloco-com-holofotes-carrinho-de-prisma-para-conjunto-de-vetores-de-exposicao-prisma-de-ilustracao-no-centro-das-atencoes-vitrine-de-exibicao_102902-3478.jpg" alt="">
                <h3>Projeto 02</h3>    
            </div>
            <div class="card">
                <img src="https://image.freepik.com/vetores-gratis/vitrine-de-vidro-cubo-de-plastico-transparente-produto-vazio-ou-exposicao-de-museu-em-forma-de-bloco-com-holofotes-carrinho-de-prisma-para-conjunto-de-vetores-de-exposicao-prisma-de-ilustracao-no-centro-das-atencoes-vitrine-de-exibicao_102902-3478.jpg" alt="">  
                <h3>Projeto 03</h3>
            </div>
        </div>


    </div>
        
    <div class="bullets">
        <div @click="passarProjetos" class="bullet-single active-bullet"></div>
        <div @click="passarProjetos" class="bullet-single"></div>
    </div>

</template>


<script>

    export default {
        name: 'Projetos',
        methods: {
            passarProjetos(){
            var lastIndex = 0;

            var rows = document.querySelectorAll('.container .row');

            rows.forEach((item, index) =>{
                document.querySelectorAll('.bullet-single')[index].addEventListener('click',()=>{
                    let lastRow = document.querySelectorAll('.container .row')[lastIndex];
                    let actualRow = document.querySelectorAll('.container .row')[index];


                    document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet');

                    document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet');

                    lastRow.style.opacity = 0;
                    actualRow.style.opacity = 1;

                    lastIndex = index;
                })
            })
        }
    }
    }


</script>

<style scoped>
.centro{
    display: flex;
    justify-content: center;
}

h1{
    width: 450px;
    margin-top: 3rem;
    text-align: center;
    border-bottom: 2px solid #3CB371;
    margin-bottom: 2rem;
}

h3{
    text-align: center;
}

img{
    width: 100%;
    height: 250px;
}

.container{
    position: relative;
    height: 500px;
}

.container .row{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    opacity: 0;
    transition: 1s;
}

.bullets{
    text-align: center;
}

.active-bullet{
    background-color: rgb(65, 202, 145) !important;     
}

.bullet-single{
    margin: 0 8px;
    cursor: pointer;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: rgb(108, 124, 122);
}


</style>