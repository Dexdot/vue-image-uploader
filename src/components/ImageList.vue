<template>
  <div>
    <h1>Image List</h1>
    <div v-if="isLoggedIn">
      <div class="image-container">
        <img v-for="img in allImages" :key="img.id" :src="img.link" :alt="img.title">
      </div>
    </div>
    <h2 v-else>Please, login to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  methods: mapActions(['fetchImages']),
  computed: mapGetters(['allImages', 'isLoggedIn']),
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>
