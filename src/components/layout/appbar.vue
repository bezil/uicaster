<template>
  <div>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-list nav color="primary">
        <v-list-item
          v-for="(item, i) in btnItems"
          :key="i"
          link
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in barItems"
          :key="i"
          link
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      elevate-on-scroll
    >
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
        <v-row
          align="center"
          justify="space-between"
          :no-gutters="!$vuetify.breakpoint.smAndUp"
        >
          <v-col cols="3" class="d-flex align-center">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              v-if="!$vuetify.breakpoint.smAndUp"
            />
            <v-toolbar-title
              style="cursor: pointer" v-if="$vuetify.breakpoint.smAndUp"
              class="font-weight-bold text-h5 primary--text"
              @click="$router.push('/')"
            >

              <img     class="sitelogo"
                        src="../../assets/logo_green.svg"
                        alt="logo"
                      />
            </v-toolbar-title>
          </v-col>

          <v-col :cols="{ 8:$vuetify.breakpoint.smAndUp, 9:!$vuetify.breakpoint.smAndUp }" v-if="$vuetify.breakpoint.smAndUp">
            <v-btn
              v-for="(item, i) in barItems"
              :key="i"
              text
              class="text-capitalize"
              :to="item.to"
              exact-active-class="accent--text"
              exact
              >{{ item.title }}</v-btn
            >
          </v-col>

          <v-col cols="2" class="text-right" v-if="$vuetify.breakpoint.mdAndUp">
             <v-text-field v-on:change="routeSearch"
            label="Search" hide-details dense outlined
            append-icon="mdi-magnify" single-line

          ></v-text-field>

          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,

    barItems: [
      {
        title: "Home",
        to: "/",
      },
      {
        title: "Games",
        to: "/games",
      },
      {
        title: "Web",
        to: "/web",
      },
      {
        title: "Apps",
        to: "/apps",
      },
      {
        title: "AR & VR",
        to: "/mixed",
      },
    ],
  }),
  methods:{
    routeSearch(e){
      this.$router.push({name: "Search", params: { query: e}})
    }
  }

};
</script>
<style lang="scss">
    .sitelogo{
        padding-top: 5px;
        height:43px;
      }

</style>
