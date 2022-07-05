<template>
  <div class="" style="border: 0px solid powderblue">
    <br />
    <v-row>
      <v-col>
        <v-card class="mx-auto" width="930" max-height="800">
          <v-card class="mx-auto" max-width="900">
            <v-toolbar color="#3CF3BE" flat>
              <v-toolbar-title
                ><center>
                  <h2>Gestión de proyectos educativos</h2>
                </center></v-toolbar-title
              >
              <v-spacer></v-spacer>
              <!--  <div>
        <v-switch
          v-model="sticky"
          label="Sticky Banner"
          hide-details
        ></v-switch> 
      </div> -->
            </v-toolbar>

            <v-card-subtitle class="pb-0">
              <center><h3>Equipo de trabajo</h3></center>
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <v-card class="mx-auto" max-width="704" outlined>
                <h3>Isaac Daniel Tordecilla Feria</h3>
                <h7> (itordecillaferia46@correo.unicordoba.edu.co)</h7>
              </v-card>
              <v-card class="mx-auto" max-width="704" outlined>
                <h3>Mara Sofía Torres Ortega</h3>
                <h7> (mstorresortega@correo.unicordoba.edu.co)</h7>
              </v-card>

              <v-card class="mx-auto" max-width="704" outlined>
                <h3>Tatiana Jeronimo Montiel</h3>
                <h7> (tjeronimomontiel68@correo.unicordoba.edu.co)</h7>
              </v-card>
              <v-card class="mx-auto" max-width="704" outlined>
                <h3>.</h3>
                <h7> (.@correo.unicordoba.edu.co)</h7>
              </v-card>

              <v-card-subtitle class="pb-0">
                <center><h3>Docente</h3></center>
              </v-card-subtitle>
              <v-card class="mx-auto" max-width="704" outlined>
                <h3>Sandra Díaz Ramos</h3>
                <h7> (limav.tic@gmail.com)</h7>
              </v-card>
            </v-card-text>

            <!--  <v-col
             
              cols="12"
            >
 
                           <v-toolbar color="#3CF3BE" flat  class=" lighten-2 py-4 text-center white--text">
                      {{ new Date().getFullYear() }} —
              <strong>Universidad De Córdoba</strong>
          <v-spacer></v-spacer>
       
        </v-toolbar>
            </v-col> -->
          </v-card>
        </v-card>
        <v-col cols="12">
          <v-toolbar
            color="rgba(0, 0, 0, 0.5)"
            flat
            class="pa-0 text-center white--text"
          >
            <v-card-subtitle class="">
              <center>
                <h3>
                  {{ new Date().getFullYear() }} —
                  <strong>Universidad De Córdoba</strong>
                </h3>
              </center>
            </v-card-subtitle>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-col>
        <br />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// const axios = require('axios');

export default {
  data() {
    return {
      palabras: [],
    };
  },
};
</script>

<style scoped>
.degrade {
  background: radial-gradient(200px top, ellipse, white, #1162ac, black);
}
.borB {
  height: 170px;
  width: 250px;
  border-radius: 1rem;
  height: 100px;
  width: 175px;
}
.contenedormap1 {
  height: 600px;
  width: 1100px;
}
</style>
