 <!-- color= "#00ffff" -->
<template>
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
         <v-row justify="center">
    <v-dialog
      v-model="dialo"
      persistent
      max-width="350"
    >
      
      <v-card>
        <img src="../assets/felicidades.gif">
<v-tex class="letras">Eres Un Ganador</v-tex>
       <v-card-actions>
          <v-spacer></v-spacer>
         
          <v-btn class="letra"
            color="red"
            text
            @click="dialo = false"
          >
           <h2> Cerrar</h2>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
   <v-row justify="center">
    <v-dialog
      v-model="dialogol"
      persistent
      max-width="350"
    >
      
      <v-card>
        <img src="../assets/perdio.gif" width="350">
        <v-tex class="letras">Puedes Mejorar.</v-tex>
        <v-spacer></v-spacer>
        <v-tex class="letras" style="color:red">¡Intentalo Una Vez Mas!</v-tex>
       <v-card-actions>
          <v-spacer></v-spacer>
         
          <v-btn class="letra"
            color="red"
            text
            @click="dialogol = false"
          >
           <h2> Continuar</h2>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
      <br />
      <h3 style="color: #9c4be4" class="subheading" align="left">
        Actividad 2
      </h3>
      <v-card>
        <v-system-bar></v-system-bar>
        <v-toolbar color="#3CF3BE" flat>
          <v-toolbar-title><h2>titulo actividad 2</h2></v-toolbar-title>
          <v-spacer></v-spacer>
          <!--  <div>
        <v-switch
          v-model="sticky"
          label="Sticky Banner"
          hide-details
        ></v-switch> 
      </div> -->
        </v-toolbar>
        <v-banner>
          descripción de actividad 2 

          <template v-slot:actions>
             <router-link :to="{ name: 'actividad1' }">
        <v-btn
          text
          color="deep-success accent-4"
        >
        Anterior
        </v-btn>
        </router-link>
            <router-link :to="{ name: 'home' }">
              <v-btn text color="deep-orange accent-4"> Volver al inicio </v-btn>
            </router-link>
          </template>
        </v-banner>
        <v-card-text class="grey lighten-4">
          <v-sheet max-width="1150" height="950" class="mx-auto">
            <v-card class="mx-auto" max-width="1110" outlined>
           <h3>Aquí se renderiza la actividad 2 de "Introducción al pensamiento Computacional"</h3>
                  
            </v-card>
          </v-sheet>
          <v-card-actions>
            <v-btn outlined x-large rounded text color="#3CF3BE"  @click="respuestas()">
              <v-btn icon x-large @click="respuestas()"
                ><img
                  src="https://cdn-icons-png.flaticon.com/512/1250/1250156.png?w=740"
                  alt=""
                  border="0"
                  width="45px"
                  height="45px"
                />
                <v-icon></v-icon>
              </v-btn>
              Verificar
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>

      <!--       <v-card
    class="mx-auto"
    max-width="1124"
    color="rgba(0, 0, 0, 0.5)"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <p class="text-h4 text--primary" color= "#00ffff">
        Control de lectura
      </p>
      <h2 style="color: #00ffff" class="subheading" align="left">
                  Cuestionario
                </h2>
      <p>adjective</p>
      <div class="text--primary">
        relating to or dependent on charity; charitable.<br>
        "an eleemosynary educational institution."
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card> -->
      <br />
    </div>
    <br />
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      dialogol: false,
      dialogo: false,
      dialog: false,
      dialo: false,
      pregunta1: null,
      pregunta2: null,
      pregunta3: null,
      pregunta4: null,
      pregunta5: null,
      pregunta6: null,
      pantalla: 1,
      impro: "yaris",
      enana: [],
    };
  },

  methods: {
    respuestas() {
      if (this.pregunta1 == "a") {
        if (this.pregunta2 == "c") {
          if (this.pregunta3 == "b") {
            if (this.pregunta4 == "e") {
              if (this.pregunta5 == "d") {
                if (this.pregunta6 == "f") {
                  this.dialo = true;
                } else {
                  this.dialogol = true;
                }
              } else {
                this.dialogol = true;
              }
            } else {
              this.dialogol = true;
            }
          } else {
            this.dialogol = true;
          }
        } else {
          this.dialogol = true;
        }
      } else {
        this.dialogol = true;
      }
    },
    resultado() {
      if (this.enana.length == 6) {
        if (this.enana[0] == 1) {
          if (this.enana[1] == 6) {
            if (this.enana[2] == 2) {
              if (this.enana[3] == 3) {
                if (this.enana[4] == 4) {
                  if (this.enana[5] == 5) {
                    this.dialog = true;
                  } else {
                    this.dialogo = true;
                  }
                } else {
                  this.dialogo = true;
                }
              } else {
                this.dialogo = true;
              }
            } else {
              this.dialogo = true;
            }
          } else {
            this.dialogo = true;
          }
        } else {
          this.dialogo = true;
        }
      }
    },
    onDragging(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
      //this.$store.commit('module/namespace', status);
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    end(ev) {
      ev.target.style.opacity = ""; // Restaura la opacidad del elemento
      ev.dataTransfer.clearData("Data");
    },
    drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },
    drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      //alert(data)
      this.impro = data;
      // let element = document.getElementById(data)
      //           console.log( ev.target.childElementCount)
      //            ev.target.appendChild(element);
      // alert(element)
      this.enana.push(this.impro);

      this.resultado();
      ev.target.appendChild(document.getElementById(data));
      document.getElementById("");
    },
  },
};
</script>
<style>
.r {
  height: 560px;
  background-color: rgb(149, 160, 255);
}
.box-iner {
  float: left;
  border: 5px solid rgb(3, 3, 3);
  width: 190px;
  height: 190px;
  padding: 1px;
  margin: 15px;
}
.enana {
  float: left;
  margin-left: 30px;
}
.letras {
  color: rgb(1, 41, 179);

  font: arial;
}
.letra {
  color: blue;

  font: arial;
}
.let {
  margin-left: 40px;
  color: rgb(0, 0, 0);
  text-shadow: 1px 3px 2px white;
  font: oblique bold 25px cursive;
}
.select-css {
  font: arial;
  color: rgb(0, 0, 0);
  line-height: 1;
  padding: 0.4em 1.4em 0.3em 0.8em;
  width: 400px;
  max-width: 15%;
  box-sizing: border-box;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);
  border-radius: 0.3em;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}

.cuadro {
  width: 900px;
  border: 5px solid rgb(0, 0, 0);
  margin-right: auto;
  margin-left: auto;
  border-radius: 50px;
  height: 370px;
}
.boton {
  background-color: rgba(0, 128, 0, 0.493);
  border: 4px solid rgb(0, 26, 255);
  margin-left: 39%;
  border-radius: 40px;
  margin-top: 5px;
  width: 230px;
}
.fondocuestionario {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 2rem;
}
</style>
 




