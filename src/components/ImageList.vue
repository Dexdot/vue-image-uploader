<template>
  <div>
    <h1>Image List</h1>
    <div>
      <img v-for="img in allImages" :key="img.id" :src="img.link" :alt="img.title">
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  methods: mapActions(['fetchImages']),
  computed: mapGetters(['allImages']),
  created() {
    this.fetchImages();
  }
};
</script>

