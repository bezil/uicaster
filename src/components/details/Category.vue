<template>
  <div>
  <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div class="my-2">
              <h2 class="text-h6 font-weight-bold">{{name}}</h2>
            </div>

            <v-row>
              <v-col cols="12" md="6" lg="4"
              v-for="(post, i) in access" :key="i">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 1 : 0"
                      hover
                      @click="passID(post.id)"
                    >
                      <v-img
                        :src="post.image"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-0"
                        style="border-radius: 6px"
                      >
                        <v-card-text>
                          <v-btn color="secondary">{{post.meta}}</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                           {{post.title}}
                        </div>

                        <div class="text-body-1 py-4">
                          {{post.description}}
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                              <v-icon v-if="post.category == 'Games'" dark>mdi-gamepad-variant</v-icon>
                            <v-icon v-else-if="post.category == 'Apps'" dark>mdi-cellphone</v-icon>
                            <v-icon v-else-if="post.category == 'Web'" dark>mdi-web</v-icon>

                            <v-icon v-else dark>mdi-sunglasses</v-icon>
                          </v-avatar>

                          <div class="pl-2">{{post.category}} · {{post.ptag}}</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>


    </v-row>
  </div>
</template>

<script>

export default {
  name: "Category",
  props:['access','name'],
  data(){
    return {

    }
  },
   computed: {


  },
  methods :{
    passID(p){

            this.$router.push({name: "Detail", params: { id: p }});
    },

  },

  created() {


  }
};
</script>

<style lang="scss" scoped>
.authors {
  position: relative;
  top: -50px;
  margin-bottom: -50px;
}
</style>
