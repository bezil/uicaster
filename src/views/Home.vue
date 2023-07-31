<template>
  <div>
    <div>
      <v-card>
        <v-img
          src="../assets/uicaster_banner.jpg"
          gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
          :aspect-ratio="16 / 9"
          height="300px"
          dark
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">

              <v-col cols="12" md="9" lg="7" xl="6">
                <h2 class="text-h3 py-3" :class="{ 'text-h4': !$vuetify.breakpoint.smAndUp}" style="line-height: 1.2">
                  UI Integrations across different Platforms
                </h2>
              </v-col>

            </v-row>
          </v-card-text>
        </v-img>
      </v-card>
    </div>

    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
           <div class="pt-8">
            <h2 class="text-h6 font-weight-bold pb-4">Latest Integrations</h2>

            <v-row>
              <v-col cols="12" md="6" lg="4"
              v-for="(post, i) in latest" :key="i">
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
                      hover @click="passID(post.id)"

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

          <div class="py-8">
            <h2 class="text-h6 font-weight-bold pb-4">Categories</h2>

            <v-row>
              <v-col cols="6" lg="3" >
                <v-card  @click="$router.push('/games')"  flat dark>
                  <v-img
                    src="../assets/tb_game.jpg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
                    height="250px"
                    class="fill-height"
                  >
                    <div
                      class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn elevation="0" color="accent">GAMES</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          UI Integrations for Games
                        </div>

                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="6" lg="3" >
                <v-card  @click="$router.push('/apps')"  flat dark>
                  <v-img
                    src="../assets/tb_apps.jpg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
                    height="250px"
                    class="fill-height"
                  >
                    <div
                      class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn elevation="0" color="accent">APPS</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          UI Integrations for Applications
                        </div>

                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="6" lg="3" >
                <v-card  @click="$router.push('/web')"  flat dark>
                  <v-img
                    src="../assets/tb_web.jpg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
                    height="250px"
                    class="fill-height"
                  >
                    <div
                      class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn elevation="0" color="accent">WEB</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          UI Integrations for Websites
                        </div>

                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="6" lg="3" >
                <v-card  @click="$router.push('/mixed')"  flat dark>
                  <v-img
                    src="../assets/tb_mixed.jpg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
                    height="250px"
                    class="fill-height"
                  >
                    <div
                      class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn elevation="0" color="accent">AR & VR</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          UI Integrations for Altered Reality
                        </div>

                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
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

  name: "Home",
  data() {
    return {

    }
  },
  computed: {
    latest(){
      return this.$store.getters.latest;
    },


  },
  methods :{
    passID(p){

            this.$router.push({name: "Detail", params: { id: p }});
    }
  },

  created() {


  }
};
</script>
