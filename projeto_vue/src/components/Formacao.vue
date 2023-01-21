<template>
    <div class="centro" id="formacao">
        <h1>Certificados</h1>
    </div>

    <div class="row">
        <div class="card">
            <img src="https://hermes.digitalinnovation.one/certificates/cover/5A8A7348.jpg" alt="">
            <h3>Certificado um</h3>
        </div>
        <div class="card">
            <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-faf2004e-3f2a-4178-b3ea-900ec3e130bc.jpg?v=1668271680000" alt="">
            <h3>Certificado um</h3>    
        </div>
        <div class="card">
            <img src="https://media.licdn.com/dms/image/C4D22AQEVU1rLIjiD9g/feedshare-shrink_1280/0/1639390188466?e=1677110400&v=beta&t=_quzpWzhtQDln_DUvmWhDltkuqxHsJvpugu_aehva3I" alt="">  
            <h3>Certificado um</h3>
        </div>
    </div>
    <div class="row">
        <div class="card">
            <img src="https://media.licdn.com/dms/image/C4E22AQGkN0_Ns2ILYw/feedshare-shrink_1280/0/1634870676800?e=1677110400&v=beta&t=HpB3hZIVBIUC42rJtMZKlMufDu8uLyY8TGepQlnAT3w" alt="">
            <h3>Certificado um</h3>
        </div>
        <div class="card">
            <img src="https://media.licdn.com/dms/image/C4E22AQFVeZcFq6tp5Q/feedshare-shrink_1280/0/1634751470266?e=1677110400&v=beta&t=S5FQXVUxrP9clXOF16067BuOL6BXB13MZvvaqAaHb7A" alt="">  
            <h3>Certificado um</h3>  
        </div>
        <div class="card">
            <img src="https://media.licdn.com/dms/image/C4E22AQG9SFdAFTSc7A/feedshare-shrink_1280/0/1634751363345?e=1677110400&v=beta&t=b4j1hAGRy7DNGnkksU4jPZ_YOjGWfKrMPONensO_m8A" alt="">  
            <h3>Certificado um</h3>
        </div>
    </div>
    <div class="row">
        <div class="card">
            <img src="https://hermes.digitalinnovation.one/certificates/cover/8EBCD5D4.jpg" alt="">
            <h3>Certificado um</h3>
        </div>
        <div class="card">
            <img src="https://hermes.digitalinnovation.one/certificates/cover/4A3D3D63.jpg" alt="">  
            <h3>Certificado um</h3>  
        </div>
        <div class="card">
            <img src="https://image.freepik.com/vetores-gratis/vitrine-de-vidro-cubo-de-plastico-transparente-produto-vazio-ou-exposicao-de-museu-em-forma-de-bloco-com-holofotes-carrinho-de-prisma-para-conjunto-de-vetores-de-exposicao-prisma-de-ilustracao-no-centro-das-atencoes-vitrine-de-exibicao_102902-3478.jpg" alt="">  
            <h3>EM BREVE</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Formacao'    
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

.row{
    display: flex;
    justify-content: space-evenly;
}

.card{
    width: 350px;
    height: 400px;
    background: #3CB371;
    margin-bottom: 2rem;
}

img{
    width: 100%;
    height: 250px;
}

</style>
