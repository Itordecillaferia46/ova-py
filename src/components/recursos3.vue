<template>
  <div>
    <br />
    <br />
    <v-card class="mx-auto" max-width="884" outlined>
      <v-list-item>
        <v-list-item-content>
          <div justific="center" aling="left">
            <iframe src="https://drive.google.com/file/d/1EIe8xtiU9eCxuqycZl-KHA5u_MolFSMp/preview" width="910" height="405" allow="autoplay"></iframe>
            <br />
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <div class="text-center">
                  <router-link :to="{ name: 'contenido3' }">
      <v-btn class="ma-2" outlined color="indigo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1246/1246315.png?w=740"
          alt=""
          border="0"
          width="30px"
          height="30px"
        />
      </v-btn>
      </router-link>
       <router-link :to="{ name: 'recursos3a' }">
      <v-btn class="ma-2" outlined color="indigo"> Siguiente
        <img
          src="https://cdn-icons-png.flaticon.com/128/1177/1177481.png?ga=GA1.2.2069425694.1656982713"
          alt=""
          border="0"
          width="30px"
          height="30px"
        /> 
      </v-btn>
      </router-link>
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
