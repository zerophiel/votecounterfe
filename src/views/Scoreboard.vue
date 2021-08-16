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
        text: 'ID Anggaran',
        align: 'center',
        value: 'id_anggaran',
      },
      {
        text: 'ID OPD',
        align: 'center',
        value: 'id_opd',
      },
      {
        text: 'Jenis Instansi',
        align: 'center',
        value: 'jns_instansi',
      },
      {
        text: 'KD Urusan',
        align: 'center',
        value: 'kd_urusan',
      },
      {
        text: 'KD Bidang Urusan',
        align: 'center',
        value: 'kd_bidurusan',
      },
      {
        text: 'KD Program',
        align: 'center',
        value: 'kd_program',
      },
      {
        text: 'KD Kegiatan',
        align: 'center',
        value: 'kd_kegiatan',
      },
      {
        text: 'KD Sub Kegiatan',
        align: 'center',
        value: 'kd_subkegiatan',
      },
      {
        text: 'ID Fungsi',
        align: 'center',
        value: 'id_fungsi',
      },
      {
        text: 'Uraian',
        align: 'center',
        value: 'uraian',
      },
      {
        text: 'HD Anggaran',
        align: 'center',
        value: 'hd_anggaran',
      },
      {
        text: 'Clevel',
        align: 'center',
        value: 'clevel',
      },
      {
        text: 'HD',
        align: 'center',
        value: 'hd',
      },
      {
        text: 'ID Rencana',
        align: 'center',
        value: 'id_rencana',
      },
      {
        text: 'Nilai',
        align: 'center',
        value: 'nilai',
      },
      {
        text: 'Nilai Ubah',
        align: 'center',
        value: 'nilai_ubah',
      },
      {
        text: 'Realisasi',
        align: 'center',
        value: 'realisasi',
      },
      {
        text: 'TU Capai',
        align: 'center',
        value: 'tu_capai',
      },
      {
        text: 'TK Capai',
        align: 'center',
        value: 'tk_capai',
      },
    ],
    items: [],
  }),
  mounted() {
    this.getAllAffectedApp()
  },
  methods: {
    getAllAffectedApp: function () {
      this.$http.get(process.env.VUE_APP_ALICE) //NANTI GANTI SESUAI DOMAIN
          .then(response => {
            this.items = response.data.content
          })
          .catch(e => {
            console.log(e)
          })
    },
  }
};
</script>