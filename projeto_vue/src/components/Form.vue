<template>
    <div class="formulario">

        <form action="">
            <div>
                <h3>Entrar em Contato</h3>
            </div>
        <div>
            <InputText placeholder="Nome"/>
        </div>

        <div>
            <InputEmail placeholder="Email"/>
        </div>

        <div>
            <Submit/>
        </div>

    </form>
    </div>

</template>

<script>
import InputText from './form/InputText.vue';
import Submit from './form/Submit.vue';
import InputEmail from './form/InputEmail.vue';

export default{
    name: 'Form',
    components: {
        InputText,
        InputEmail,
        Submit
    }
}
</script>


<style scoped>
    .formulario{ 
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 2rem;
    }

</style>