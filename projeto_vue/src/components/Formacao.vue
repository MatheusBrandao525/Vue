<template>
  <div class="centro" id="formacao">
    <h1>Certificados</h1>
  </div>

  <div class="container1">
    <div class="row1" style="opacity: 1">
      <div class="card1">
        <img
          src="https://hermes.digitalinnovation.one/certificates/cover/5A8A7348.jpg"
          alt=""
        />
        <h3>Bootcamp FullStack</h3>
        <p>Iniciando Bootcamp Spread FullStack Developer.</p>
      </div>
      <div  class="card1">
        <img
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-faf2004e-3f2a-4178-b3ea-900ec3e130bc.jpg?v=1668271680000"
          alt=""
        />
        <h3>MySQL</h3>
        <p>Especialização em modelagem de banco de dados com MySQL.</p>
      </div>
      <div  class="card1">
        <img
          src="https://media.licdn.com/dms/image/C4D22AQEVU1rLIjiD9g/feedshare-shrink_1280/0/1639390188466?e=1677110400&v=beta&t=_quzpWzhtQDln_DUvmWhDltkuqxHsJvpugu_aehva3I"
          alt=""
        />
        <h3>PHP Avançado</h3>
        <p>Especialização em tecnicas de desenvolvimento avançado com PHP.</p>
      </div>
    </div>
    <div class="row1">
      <div class="card2">
        <img
          src="https://media.licdn.com/dms/image/C4E22AQGkN0_Ns2ILYw/feedshare-shrink_1280/0/1634870676800?e=1677110400&v=beta&t=HpB3hZIVBIUC42rJtMZKlMufDu8uLyY8TGepQlnAT3w"
          alt=""
        />
        <h3>PHP Orientado a Objetos</h3>
        <p>Especialização em PHP Orientado a Objetos com banco de dados.</p>
      </div>
      <div class="card2">
        <img
          src="https://media.licdn.com/dms/image/C4E22AQFVeZcFq6tp5Q/feedshare-shrink_1280/0/1634751470266?e=1677110400&v=beta&t=S5FQXVUxrP9clXOF16067BuOL6BXB13MZvvaqAaHb7A"
          alt=""
        />
        <h3>PHP Funções e Validações</h3>
        <p>Especialização em funções de validção de dados com PHP.</p>
      </div>
      <div class="card2">
        <img
          src="https://media.licdn.com/dms/image/C4E22AQG9SFdAFTSc7A/feedshare-shrink_1280/0/1634751363345?e=1677110400&v=beta&t=b4j1hAGRy7DNGnkksU4jPZ_YOjGWfKrMPONensO_m8A"
          alt=""
        />
        <h3>PHP Condicionais e Sessões</h3>
        <p>
          Especialização em formularios com laços condicionais e criação de
          sessões com PHP.
        </p>
      </div>
    </div>
    <div class="row1">
      <div class="card3">
        <img
          src="https://hermes.digitalinnovation.one/certificates/cover/8EBCD5D4.jpg"
          alt=""
        />
        <h3>JavaScript</h3>
        <p>Especialização em javascript para desenvolvimento web moderno.</p>
      </div>
      <div class="card3">
        <img
          src="https://hermes.digitalinnovation.one/certificates/cover/4A3D3D63.jpg"
          alt=""
        />
        <h3>Bootstrap</h3>
        <p>
          Especialização em criação de paginas com a rapidez e ediciência do
          Bootstrap.
        </p>
      </div>
      <div class="card3">
        <img
          src="https://media.licdn.com/dms/image/C4D22AQFL4qpQJ3FzLg/feedshare-shrink_1280/0/1674351543706?e=1677110400&v=beta&t=1g2V4CmE-j7dlmklKdNFksyRr0QEfm6-jlDcpmMjtRQ"
          alt=""
        />
        <h3>JavaScript</h3>
        <p>
          Especialização em JavaScript profissional com varios projetos praticos
          e carga horaria de 14 horas.
        </p>
      </div>
    </div>
  </div>
  <div class="bullets">
    <div
      @click="passarCertificados"
      class="bullet-single1 active-bullet1"
    ></div>
    <div @click="passarCertificados" class="bullet-single1"></div>
    <div @click="passarCertificados" class="bullet-single1"></div>
  </div>
</template>

<script>
export default {
  name: "Formacao",
  methods: {
    passarCertificados() {
      var lastIndex = 0;

      var rows = document.querySelectorAll(".container1 .row1");

      rows.forEach((item, index) => {
        document
          .querySelectorAll(".bullet-single1")
          [index].addEventListener("click", () => {
            let lastRow =
              document.querySelectorAll(".container1 .row1")[lastIndex];
            let actualRow =
              document.querySelectorAll(".container1 .row1")[index];

            document
              .querySelectorAll(".bullet-single1")
              [lastIndex].classList.remove("active-bullet1");

            document
              .querySelectorAll(".bullet-single1")
              [index].classList.add("active-bullet1");

            lastRow.style.opacity = 0;
            actualRow.style.opacity = 1;

            lastIndex = index;
          });
      });
    },

  },



};
</script>

<style scoped>
.centro {
  display: flex;
  justify-content: center;
}

h1 {
  width: 450px;
  margin-top: 3rem;
  text-align: center;
  border-bottom: 2px solid #3cb371;
  margin-bottom: 2rem;
}

h3 {
  text-align: center;
}

.row1 {
  display: flex;
  justify-content: space-evenly;
}

p {
  text-align: center;
}

img {
  width: 100%;
  height: 350px;
}

.container1 {
  position: relative;
  height: 500px;
}

.container1 .row1 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  opacity: 0;
  transition: 1s;
}

.bullets {
  margin: 2rem 0;
  text-align: center;
}

.active-bullet1 {
  background-color: rgb(65, 202, 145) !important;
}

.bullet-single1 {
  margin: 0 8px;
  cursor: pointer;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: rgb(108, 124, 122);
}

.card1,.card2,.card3 {
  width: 550px;
  height: 500px;
  background: #3cb371;
  margin-bottom: 2rem;
}


.card1:hover {
  transform:scale(2) !important;
}

</style>
