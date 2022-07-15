<template>
  <div>
    <br />
    <br />
    <v-card class="mx-auto" max-width="884" outlined>
      <v-list-item>
        <v-list-item-content>
          <div justific="center" aling="left">
            <iframe
              width="910"
              height="405"
              src="https://www.youtube.com/embed/lc5JJTQa4r8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <br />
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <div class="text-center">
  <div class="text-center">
         <router-link :to="{ name: 'home' }">
      <v-btn class="ma-2" outlined color="indigo"> Volver</v-btn>
      </router-link>

    <!--   <v-btn class="ma-2" outlined color="indigo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1250/1250278.png?ga=GA1.2.2069425694.1656982713"
          alt=""
          border="0"
          width="30px"
          height="30px"
        />
      </v-btn>

      <router-link :to="{ name: 'actividad1' }">
        <v-btn class="ma-2" outlined color="indigo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/947/947489.png?w=740&t=st=1656986351~exp=1656986951~hmac=9f80e6c3f07205581e65caec9c4ebb9ae6a05f6f28e1b004ce5d4ee425876b6e"
            alt=""
            border="0"
            width="30px"
            height="30px"
          />
        </v-btn> -->
<!--         
      </router-link> -->
      
            <v-btn class="ma-2" outlined color="indigo" >
               <v-img
                    max-height="40"
                    max-width="40"
                    src="https://i.ibb.co/fQCJpZs/add.png"
                  ></v-img>
            </v-btn>
         <router-link :to="{ name: 'actividad1' }">
        <v-btn class="ma-2" outlined color="indigo">
       Actividad 
        </v-btn>
        
      </router-link>
 </div>
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
