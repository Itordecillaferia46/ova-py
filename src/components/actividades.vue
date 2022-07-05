<template>
  <div>
    <br />
    <br />
    <br />
    <br />

    <!--  <v-card class="mx-auto" max-width="884" outlined>
      <v-list-item>
        <v-list-item-content>
          <div justific="center" aling="left">
            <iframe
              width="910"
              height="405"
              src="https://www.youtube.com/embed/1AX4eK6MJJo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <br />
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card> -->
    <v-row dense>
      <v-col>
              <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Cuestionario
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
       <div class="text-center">
              <router-link :to="{ name: 'contenido1' }" class="noneline">
                <v-btn class="ma-2" outlined color="success lighten-2"> Iniciar </v-btn>
              </router-link>
            </div>

      <v-spacer></v-spacer>

    
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>


      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
      <v-col>
          <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
       <div class="text-center">
              <router-link :to="{ name: 'contenido1' }" class="noneline">
                <v-btn class="ma-2" outlined color="success lighten-2"> Iniciar </v-btn>
              </router-link>
            </div>

      <v-spacer></v-spacer>

    
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>


      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Fundamentos de Python</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      
    </v-row>

    <div class="text-center">
      <v-btn class="ma-2" outlined large fab color="indigo">
        <v-icon>mdi-school</v-icon>
      </v-btn>

      <v-btn class="ma-2" outlined large fab color="indigo">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>
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
<style scoped>
.degrade {
  background: radial-gradient(200px top, ellipse, white, #1162ac, black);
}
</style>
