<template>
    <div class="container-footer">
        <Form />
    </div>
</template>

<script>
import Form from './Form.vue';

export default {
    name: 'Footer',
    components:{
        Form,
    }
}
</script>

<style scoped>

.container-footer{
    padding-top: 1rem;
    width: 100%;
    height: 300px;
    box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 40%);
}

</style>
