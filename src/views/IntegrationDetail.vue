<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div v-if="currentpost">
          <div>
            <v-card flat color="transparent">
              <v-img
                :src="currentpost[0].image"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 6px" >
                 <iframe width="100%" height="100%" :src="currentpost[0].iframe"
                 title="YouTube video player" frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen>
                 </iframe>
              </v-img>


              <v-card-text>


                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <h4>{{currentpost[0].title}}</h4>
                </div>

                <div class="text-body-1 py-4">
                    {{currentpost[0].description}}
                    </div>

                <div class="d-flex align-center justify-space-between">
                  <div class="d-flex align-center">
                    <v-avatar color="accent" size="36">
                       <v-icon v-if="currentpost[0].category == 'Games'" dark>mdi-gamepad-variant</v-icon>
                            <v-icon v-else-if="currentpost[0].category == 'Apps'" dark>mdi-cellphone</v-icon>
                            <v-icon v-else-if="currentpost[0].category == 'Web'" dark>mdi-web</v-icon>

                            <v-icon v-else dark>mdi-sunglasses</v-icon>
                    </v-avatar>

                    <div class="pl-2 text-body-1">{{currentpost[0].category}} · {{currentpost[0].ptag}}</div>
                  </div>

                  <div class="d-flex align-center">
                    <div>
                  <v-btn elevation="0" color="secondary">{{currentpost[0].meta}}</v-btn>
                </div>
                  </div>
                </div>

                <v-divider class="my-4"></v-divider>


                <div class="py-4">
                  <v-btn :href="currentpost[0].link" target="_blank"
                        block outlined
                        color="primary"
                        >
                        <v-icon left>
                            mdi-download
                        </v-icon>
                        View Resources
                    </v-btn>
                </div>

                <div class="text-h5 primary--text font-weight-bold">
                  Screenshots

                </div>

                <div class="my-4">
                  <v-row>


                    <v-col cols="6" v-for="(ss, i) in currentpost[0].ss" :key="i">
                      <v-card>
                        <v-img v-if="currentpost[0].ss[i]"
                          :src="currentpost[0].ss[i]"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>

                <div class="d-flex align-center justify-space-between mt-8">
                  <div>
                    <v-row>
                      <v-col class="flex-shrink-0" cols="auto"
                      v-for="(tag, i) in currentpost[0].tags" :key="i">
                        <v-chip color="accent">#{{tag}}</v-chip>
                      </v-col>


                    </v-row>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>


    </v-row>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
        getcurrentpost:null
    }
  },
  computed:{
      currentpost(){
        return this.getcurrentpost
      }
  },
    created() {


  },
  async mounted() {
    this.getcurrentpost = await this.$store.getters.full.filter((post) =>{
      return post.id === this.$route.params.id
    }
    )

  }
};
</script>
