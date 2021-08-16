<template>
  <v-app id="app">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="goHome">
        <v-icon>mdi-home</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vote Counter</span>

      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    goHome: function () {
      this.$router.push({name:"Home"})
    }
  }
};
</script>