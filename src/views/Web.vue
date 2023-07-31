<template>
  <div>
    <category :access="web" name="Web"/>
  </div>
</template>

<script>
import category from '../components/details/Category.vue'


export default {

  name: "Web",
  components: { category },
   computed: {
    web(){

      return this.$store.getters.getweb;
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
