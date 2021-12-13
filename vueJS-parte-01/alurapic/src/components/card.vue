<template>
  <div class="flex-container">
    
    <ul class="photos-list " v-for="(photos, i) in photos" :key="i">
      <li class="item-photo"> 
        <div class="photo-card">
          <h2 class="photo-card-title"> {{ photos.titulo }}  </h2>
          <div class="photo-card-content">
            <img :src="photos.url" :alt="photos.titulo"/> 
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    props: {
      photos: Object
    },
    data(){}
  }
</script>

<style scoped>

.photos-container .flex-container {
  flex-wrap: wrap;
  align-items: flex-start;
}

.photo-card {
  border: 1px solid gray;
  margin: 5px;
  box-shadow: 5px 5px 10px gray;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.photo-card .photo-card-title {
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 600;
}

</style>
