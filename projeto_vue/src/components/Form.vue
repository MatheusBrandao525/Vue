<template>
    <div class="formulario">
        <form action="">
        <div>
            <InputText placeholder="Nome"/>
        </div>

        <div>
            <InputText placeholder="Email"/>
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

export default{
    name: 'Form',
    components: {
        InputText,
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