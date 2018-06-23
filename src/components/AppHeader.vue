<template>
  <header class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      Image Storage
    </router-link>
    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <router-link to="/" class="ui item">
          Gallery
        </router-link>
        <router-link to="/upload" class="ui item">
          Upload
        </router-link>
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
