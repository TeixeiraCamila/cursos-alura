<template>
  <div id="app">
    
    <section class="photos-container">
      <h1 class="page-title"> 
        {{ pageTitle }} 
      </h1>
      <card :photos="photos"/>
    </section>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    card: () => import('@/components/card.vue'),
  },
  data(){
    return{
      pageTitle: 'Alurapic',
      photos: []
    }
  },
  created(){
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(photos => this.photos = photos);
  }
}
</script>

<style>
#app {
  font-family: 'Nunito', sans-serif;
  text-align: center;
  color: var(--mainText);
  margin-top: 30px;
}

h1.page-title {
  font-size: 40px;
  font-weight: 900;
  padding-bottom: 20px;
}
</style>
