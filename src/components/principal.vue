<template>
  <div>
    <v-app>
      <div>
        <v-app-bar color="#011222" dense dark height="70">
          <v-row>
            <v-col md="1">
              <center>
                <router-link :to="{ name: 'inicio' }" class="noneline">
                  <v-btn icon
                    ><img
                      src="https://i.ibb.co/vv0PV03/Dise-o-sin-t-tulo-1-removebg-preview.png"
                      alt=""
                      border="0"
                      width="75px"
                      height="75px"
                    />
                    <v-icon></v-icon>
                  </v-btn>
                </router-link>
              </center>
            </v-col>
            <v-col>
              <router-link :to="{ name: 'inicio' }" class="noneline">
                <!-- <h2 style="color: #00ffff">
              OVA para el fortalecimiento del pensamiento computacional a través
              de PYTHON
            </h2> -->
                <h2 style="color: #00ffff" class="subheading" align="left">
                  OVA SCTTPY
                </h2>
              </router-link>
            </v-col>
          </v-row>
        </v-app-bar>
      </div>
      <hr style="color: #00ffff" />
      <div class="fondo-p">
        <v-parallax
          dark
          src="https://i.ibb.co/6WGGqkb/fondoinicio.png "
          height="625"
          class="fondo-p"
        >
          <v-container fluid>
            <v-row>
              <v-col cols="2">
                <!--  <v-card-title class="blue white--text">
          <span class="headline">Menu</span>
                 </v-card-title> -->
                <v-spacer></v-spacer>

                <v-row>
                  <v-col md="4">
                    <router-link :to="{ name: 'home' }" class="noneline">
                      <v-btn icon
                        ><img
                          src="https://i.ibb.co/stKhnNZ/home.png"
                          alt=""
                          border="0"
                          width="75px"
                          height="75px"
                        />
                        <v-icon></v-icon>
                      </v-btn>
                    </router-link>
                  </v-col>
                </v-row>
                <br />
                <br />

                <v-row>
                  <v-card color="indigo darken-2" flat>
                    <v-navigation-drawer
                      fluid
                      class="headline mb-1"
                      permanent
                      expand-on-hover
                      color="primary"
                      rounded
                      height="73"
                    >
                      <v-list-item dark fluid class="pa-0"
                        ><img
                          img
                          src="https://i.ibb.co/v16j4QV/nsasns.png"
                          alt="nsasns"
                          border="0"
                          rounded
                          width="60px"
                          height="65px"
                        />

                        <router-link
                          :to="{ name: 'contenido' }"
                          class="noneline"
                        >
                          <v-btn-fab
                            color="primary"
                            depressed
                            elevation="5"
                            icon
                            outlined
                            raised
                            tile
                            x-large
                            x-small
                            ><h3 style="color: rgb(247, 252, 252)">
                              Recursos
                            </h3></v-btn-fab
                          >
                        </router-link>
                      </v-list-item>
                    </v-navigation-drawer>
                  </v-card>
                </v-row>

                <v-row>
                  <v-card color="indigo darken-2" flat>
                    <v-navigation-drawer
                      flat
                      fluid
                      class="headline mb-1"
                      permanent
                      expand-on-hover
                      color="primary"
                      height="73"
                    >
                      <v-list-item dark fluid class="pa-0" round
                        ><img
                          img
                          src="https://i.ibb.co/MSXKFpX/actividades.png"
                          alt="actividades"
                          border="0"
                          width="65px"
                          height="65px"
                        />
                        <router-link
                          :to="{ name: 'actividades' }"
                          class="noneline"
                        >
                          <v-btn-fab
                            color="primary"
                            elevation="5"
                            outlined
                            raised
                            rounded
                            text
                            x-large
                            x-small
                            ><h3 style="color: rgb(247, 252, 252)">
                              Actividades
                            </h3></v-btn-fab
                          >
                        </router-link>
                      </v-list-item>
                    </v-navigation-drawer>
                  </v-card>
                </v-row>

                <v-row>
                  <v-card color="indigo darken-2" flat>
                    <v-navigation-drawer
                      fluid
                      class="headline mb-1"
                      permanent
                      expand-on-hover
                      color="primary"
                      height="73"
                    >
                      <v-list-item dark fluid class="pa-0"
                        ><img
                          img
                          src="https://i.ibb.co/W5ZMzMR/eval.png"
                          alt="eval"
                          border="0"
                          width="60px"
                          height="65px"
                        />

                        <router-link
                          :to="{ name: 'evaluacion' }"
                          class="noneline"
                        >
                          <v-list-item-title
                            ><h2 style="color: rgb(247, 252, 252)">
                              Evaluación
                            </h2></v-list-item-title
                          >
                        </router-link>
                      </v-list-item>
                    </v-navigation-drawer>
                  </v-card>
                </v-row>

                <v-row>
                  <v-card color="indigo darken-2" flat>
                    <v-navigation-drawer
                      fluid
                      class="headline mb-1"
                      permanent
                      expand-on-hover
                      color="primary"
                      height="73"
                    >
                      <v-list-item dark fluid class="pa-0"
                        ><img
                          src="https://i.ibb.co/4R67L4t/credittos.png"
                          alt="credittos"
                          border="0"
                          height="65px"
                          width="60px"
                        />

                        <router-link
                          :to="{ name: 'creditos' }"
                          class="noneline"
                        >
                          <v-btn-fab
                            color="primary"
                            elevation="5"
                            outlined
                            raised
                            rounded
                            text
                            x-large
                            x-small
                            ><h3 style="color: rgb(247, 252, 252)">
                              Creditos
                            </h3></v-btn-fab
                          >
                        </router-link>
                      </v-list-item>
                    </v-navigation-drawer>
                  </v-card>
                </v-row>
              </v-col>

              <v-row>
                <v-col aling="left" justific="center">
                  <hr style="color: #00ffff" />
                  <v-main
                    color="rgb(255, 0, 0, 0.2)"
                    style="border: 0px solid powderblue"
                    class="fondo"
                  >
                    <router-view></router-view>
                  </v-main>
                </v-col>
              </v-row>
            </v-row>
          </v-container>
          <v-container height="845"> </v-container>
        </v-parallax>
      </div>
    </v-app>
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
.fondo-p {
  height: 560px;
  background-color: #011222;
}
.degrade {
  background: radial-gradient(200px top, ellipse, white, #1162ac, black);
}

#alpha {
  background-color: rgba(200, 208, 231, 0.5);
  height: 2em;
  width: 150px;
  position: absolute;
  top: 10px;
  color: #fff;
  text-align: center;
  padding-top: 1em;
}

.fondo {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 2rem;
}
</style>
