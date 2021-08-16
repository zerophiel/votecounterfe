<template>
  <v-container>
    <v-layout
        text-center
        wrap
    >
      <v-flex
          xs6
          mb-5
          v-for="item in buttons"
          v-bind:key="item.name"
      >
        <div class="text-center">
          <v-btn :to="{name:item.to}">{{item.name}}</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    buttons: [
      {
        name: "Input Vote",
        to: "Form"
      },
      {
        name: "Lihat Hasil",
        to: "Scoreboard"
      }
    ],
  }),
  mounted() {
  },
  methods: {}
};
</script>