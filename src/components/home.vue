<template>
  <div>
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
                <v-toolbar color="#3CF3BE" flat>
              <v-toolbar-title
                ><center>
                  <h3>Area Personal</h3>
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
            <br>
    <v-row dense>
      <v-col>
        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://i.ytimg.com/vi/ti315UlVtS4/maxresdefault.jpg"
          >
           
          </v-img>
           <v-card-title>Introducción</v-card-title>

          <v-card-subtitle class="pb-0">
            Fundamentos del pensamiento computacional</v-card-subtitle
          >

          <v-card-text class="text--primary"> </v-card-text>

          <v-card-actions>
            <div class="text-center">
              <router-link :to="{ name: 'contenido1' }" class="noneline">
                <v-btn class="ma-2" outlined color="primary"> Iniciar </v-btn>
              </router-link>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://sitios.mineduc.cl/lenguajesdigitales/img/E-5.jpg"
          >
          
          </v-img>
  <v-card-title> Code.org</v-card-title>
          <v-card-subtitle class="pb-0">
            Resolución de problemas con Code.Org</v-card-subtitle
          >

          <v-card-text class="text--primary">
            <div>(Opcional)</div>
          </v-card-text>

          <v-card-actions>
            <div class="text-center">
              <router-link :to="{ name: 'contenido2' }" class="noneline">
                <v-btn class="ma-2" outlined color="primary"> Iniciar </v-btn>
              </router-link>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
         
          </v-img>
   <v-card-title>Fundamentos de Python</v-card-title>
          <v-card-subtitle class="pb-0"> Unidad 1</v-card-subtitle>

          <v-card-text class="text--primary">
           

       
          </v-card-text>

          <v-card-actions>
            <div class="text-center">
              <router-link :to="{ name: 'contenido3' }" class="noneline">
                <v-btn class="ma-2" outlined color="primary"> Iniciar </v-btn>
              </router-link>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
         
          </v-img>
   <v-card-title>Fundamentos de Python</v-card-title>
          <v-card-subtitle class="pb-0"> Unidad 2 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div></div>
          </v-card-text>
         
          
             <v-card-actions>
            <div class="text-center">
              <router-link :to="{ name: 'contenido4' }" class="noneline">
                <v-btn class="ma-2" outlined color="primary"> Iniciar </v-btn>
              </router-link>
            </div>
          </v-card-actions>

        </v-card>
        <br />
        <br />
      </v-col>
    </v-row>

    <div class="text-center">
     
    

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
