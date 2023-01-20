<template>
    <div class="centro">
        <h1>Projetos</h1>
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

img{
    width: 100%;
    height: 250px;
}
</style>