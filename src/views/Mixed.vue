<template>
  <div>
    <category :access="mixed" name="AR & VR"/>
  </div>
</template>

<script>
import category from '../components/details/Category.vue'


export default {

  name: "Mixed",
  components: { category },
   computed: {
    mixed(){
      return this.$store.getters.getmixed;
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
