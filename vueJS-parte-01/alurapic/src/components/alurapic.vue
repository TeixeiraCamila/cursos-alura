<template>
  <section>
    <h1>{{ tituloPage }}</h1>
    <ul v-for=" (foto, i) in fotos" :key="i">
      <li> <img :src="foto.url" :alt="foto.titulo"/> </li>
    </ul>
  </section>
</template>

<script>
export default {

  data(){
   return{
      tituloPage: 'Alurapic',
      fotos: []
      
   }
  },
  created(){
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos);
  }
  
}
</script>

<style scoped>

</style>
