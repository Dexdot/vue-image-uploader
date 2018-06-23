<template>
  <header class="ui secondary pointing menu">
    <a class="active item">
      Image Storage
    </a>
    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <a class="ui item">
          Gallery
        </a>
        <a class="ui item">
          Upload
        </a>
        <a class="ui item" @click="logout">
          Logout
        </a>
      </div>
      <a v-else class="ui item" @click="login">
        Login
      </a>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['isLoggedIn'])
};
</script>


<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
