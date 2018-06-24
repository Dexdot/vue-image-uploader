<template>
  <div>
    <h1>Upload Form</h1>
    <div class="dropper">
      <input type="file" accept="image/*" multiple @change="uploadImages($event.target.files)">
      <span>Drag and drop your images here</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages'])
};
</script>

<style scoped>
.dropper {
  border: 2px dashed #000;
  border-radius: 5px;
  transition: 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;

  position: relative;
}
.dropper:hover {
  background: #f8f8f8;
}
input {
  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
