<template>
    <div class="centro" id="projetos">
        <h1>Projetos</h1>
    </div>
    <div class="row">
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
</template>


<script>
    export default {
        name: 'Projetos'
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
</style>