<template>
  <div>
    <v-footer color="primary" dark app absolute>
      <v-container>

        <div class="text-center ">
          Copyright &copy;
          <a
            class="white--text"
            href="https://devbez.com"
            target="_blank"
            rel="noopener noreferrer"
            >Devbez</a
          >
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {

};
</script>
