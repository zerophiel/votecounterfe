<template>
  <v-container>
    <v-layout
        text-center
        wrap
    >
      <v-flex xs3>

      </v-flex>
      <v-flex
          xs6
      >
        <form>
          <v-text-field
              v-model="no_hp"
              label="Nomer Handphone (08xxxxxxxxx)"
              required
          ></v-text-field>
          <v-text-field
              v-model="nama"
              label="Nama Lengkap"
              required
          ></v-text-field>
          <v-select
              :items="pilihancandidate"
              v-model="chosen"
              item-text="name"
              item-value="uuid"
              label="Pilihan"
              required
          ></v-select>

          <v-btn class="mr-4" @click="submit">Kirim</v-btn>
          <v-btn @click="clear">Batal</v-btn>
        </form>

      </v-flex>
      <v-flex xs3>

      </v-flex>
      <div class="text-center ma-2">
        <v-snackbar
            v-model="snackbar"
        >
          {{ snackbarText }}
          <v-btn
              color="pink"
              text
              @click="snackbar = false"
          >
            Close
          </v-btn>
        </v-snackbar>
      </div>
    </v-layout>
  </v-container>
</template>


<script>

export default {
  data: () => ({
    no_hp: "",
    nama: "",
    chosen:"",
    pilihancandidate:[],
    snackbar:false,
    snackbarText:""
  }),
  mounted() {
    this.fetchPilihan()
  },
  methods: {
    submit () {
      let postData = {
        voterPhoneNumber: this.no_hp,
        voterName: this.nama,
        candidateUUID: this.chosen,
      }
      this.$http.post(process.env.VUE_APP_VOTE+"cast-vote",postData)
          .then(() => {
            this.snackbarText="Vote Terkirim Terima kasih"
            this.snackbar=true
            this.clear()
          })
          .catch(() => {
            this.snackbarText="Vote Gagal Terkirim"
            this.snackbar=true
          })
    },
    clear () {
      this.no_hp= ""
      this.nama= ""
      this.pilihancandidate= []
      this.fetchPilihan()
    },
    fetchPilihan: function () {
      // var candidates = []
      this.$http.get(process.env.VUE_APP_VOTE+"candidate")
      .then(response => {
        // for (let i = 0; i < response.data.length;i++) {
        //   candidates.push(response.data[i].name +" - "+ response.data[i].uuid)
        // }
        this.pilihancandidate = response.data
      })
    }
  }
};
</script>