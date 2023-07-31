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
                <h2 class="text-h3 py-3" style="line-height: 1.2">
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
            <h2 class="text-h6 font-weight-bold pb-4">Categories</h2>

            <v-row>
              <v-col cols="6" lg="3" >
                <v-card flat dark>
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
                <v-card flat dark>
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
                <v-card flat dark>
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
                <v-card flat dark>
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


          <div class="pt-8">
            <h2 class="text-h6 font-weight-bold pb-4">Recommended For You</h2>

            <v-row>
              <v-col cols="12" md="6" lg="4" v-for="i in 6" :key="i">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      hover
                      to="/detail"
                    >
                      <v-img
                        src="https://cdn.pixabay.com/photo/2020/12/23/14/41/forest-5855196_1280.jpg"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="accent" to="category">TIPS</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          How to write an awesome blog post in 5 steps
                        </div>

                        <div class="text-body-1 py-4">
                          Ultrices sagittis orci a scelerisque. Massa placerat
                          duis ultricies lacus sed turpis
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Yan Lee · 22 July 2019</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>


          <div class="pt-8">
            <h2 class="text-h6 font-weight-bold">Latest Posts</h2>

            <div>
              <v-row v-for="i in 6" :key="i" class="py-4">
                <v-col cols="12" md="4">
                  <v-card flat height="100%">
                    <v-img
                      src="https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_1280.jpg"
                      :aspect-ratio="16 / 9"
                      height="100%"
                    ></v-img>
                  </v-card>
                </v-col>

                <v-col>
                  <div>
                    <v-btn depressed color="accent">TRAVEL</v-btn>

                    <h3 class="text-h4 font-weight-bold pt-3">
                      Ut enim blandit volutpat maecenas volutpat blandit
                    </h3>

                    <p class="text-h6 font-weight-regular pt-3 text--secondary">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <div class="d-flex align-center">
                      <v-avatar color="accent" size="36">
                        <v-icon dark>mdi-feather</v-icon>
                      </v-avatar>

                      <div class="pl-2">Yan Lee · 03 Jan 2019</div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>

      <v-col>
        <div class="pt-16">
          <siderbar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>
