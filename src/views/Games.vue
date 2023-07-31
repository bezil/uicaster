<template>
  <div>
    <category :access="games" name="Games"/>
  </div>
</template>

<script>
import category from '../components/details/Category.vue'


export default {

  name: "Games",
  components: { category },
   computed: {
    games(){
      return this.$store.getters.getgames;
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
