<template>
  <v-container>
    <v-layout
        text-center
        wrap
    >
      <v-flex
          xs12
      >
        <v-card>
          <v-card-title>
            Scoreboard
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
              :headers="headers"
              :items="items"
              :search="search"
          ></v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: 'Nama Kandidat',
        align: 'center',
        value: 'candidateName',
      },
      {
        text: 'Jumlah Suara',
        align: 'center',
        value: 'candidateCount',
      },
      {
        text: 'Persentase (%)',
        align: 'center',
        value: 'percentage',
      },
    ],
    items: [],
  }),
  mounted() {
    this.getAllAffectedApp()
  },
  methods: {
    getAllAffectedApp: function () {
      this.$http.get(process.env.VUE_APP_VOTE+"cast-vote") //NANTI GANTI SESUAI DOMAIN
          .then(response => {
            this.items = response.data.candidateStandings
          })
          .catch(e => {
            console.log(e)
          })
    },
  }
};
</script>