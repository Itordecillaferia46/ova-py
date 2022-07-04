<template>
  <div class="colorfondo">
    <v-parallax
      dark
      src="https://i.ibb.co/6WGGqkb/fondoinicio.png"
      height="665"
      class="fondoP"
    >
      <v-row>
        <v-col cols="12" sm="6" md="8">
          <br />
          <v-card color="#011222" class="pa-2" outlined tile>App v1.0.1.0 </v-card>
          
        </v-col>
        
        <v-col cols="6" md="4">
          <br />
          <br />
          <br />
          <br />
          <center>
           <!--  <v-card color="#011222" class="pa-2" outlined tile>
              <h1 style="color: #00ffff">OVA SCTTPY</h1>
            </v-card> -->
          </center>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-row>
            <v-col cols="12" sm="6" md="8">
              <center>
                <v-img
                  max-height="390"
                  max-width="390"
                  src="https://i.ibb.co/vv0PV03/Dise-o-sin-t-tulo-1-removebg-preview.png"
                ></v-img>
              </center>
            </v-col>
            <v-col cols="6" md="4">
              <v-main
                
                    style="border: 0px solid powderblue"
                  
                  >
              <center>
               
            <v-card color="#011222" class="pa-2" outlined tile>
              <h1 style="color: #00ffff"><font size=11 face="arial">OVA SCTTPY</font></h1>
            </v-card>
          <br>
                <router-link :to="{ name: 'home' }">
                  <v-btn class="noneline" outlined color="primary" dark x-large
                    ><font  face="arial">Ingresar</font></v-btn
                  >
                </router-link>
              </center>
              </v-main>
            </v-col>
          </v-row>

          <div class="text-center">
            <v-row class="mb-6" no-gutters>
              <v-col cols="12" sm="6" md="8">
                <v-card class="pa-4" outlined tile color="#011222">
                  <marquee
                    ><h3 style="color: #ffffff" class="subheading">
                      Piensa constantemente cómo podrías hacer mejor las cosas.
                      <v-btn class="ma-2" text icon color="blue lighten-2">
                        <v-icon>mdi-thumb-up</v-icon>
                      </v-btn>
                    </h3></marquee
                  >
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <center>
                  <!--  <router-link :to="{ name: 'principal' }">
                        <v-btn
                          class="ma-2"
                          outlined
                          color="primary"
                          dark
                          x-large
                          >Ingresar</v-btn
                        >
                      </router-link> -->
                </center>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-parallax>

    <v-footer dark padless>
      <v-card color="#011222" class="flex" flat tile height="90">
        <v-card-text class="white--text pt-0"> </v-card-text>
        <v-divider></v-divider>

        <v-card-text class="white--text">
          <!--  {{ new Date().getFullYear() }} — <strong></strong>  -->
        </v-card-text>
      </v-card>
    </v-footer>

    <v-footer dark padless>
      <v-card color="#011222" class="flex" flat tile>
        <div class="footer-copyright py-2 text-center">
          © UNIVERSIDAD DE CORDOBA - {{ new Date().getFullYear() }}
          <strong></strong>
        </div>
        <br />
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
.fondoP {
  height: 560px;
  background-color: #011222;
}
.colorfondo {
  background-color: #011222;
}
</style>
