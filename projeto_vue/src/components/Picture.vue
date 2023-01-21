<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
export default{
    name: 'Picture',
    data() {
        return {    
            avatar: '/img/PERFIL.jpg',
            descricao: 'Matheus F. Brandão'
        }
    }
}
</script>]

<style scoped>
  img{
    border-radius: 50%;
  }
</style>