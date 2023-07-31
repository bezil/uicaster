<template>
  <div>
    <category :access="apps" name="Apps"/>
  </div>
</template>

<script>
import category from '../components/details/Category.vue'


export default {

  name: "Apps",
  components: { category },
   computed: {
    apps(){
      return this.$store.getters.getapps;
    },

  },
  mounted() {


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
