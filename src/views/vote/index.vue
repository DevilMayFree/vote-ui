<template>
  <div>
    <div class="wrap">
      <div class="projIntro">
        <span>vote ui</span>
      </div>

    </div>
  </div>
</template>
<script setup lang="js">
import {useRouter} from 'vue-router';

const {currentRoute} = useRouter();
const route = currentRoute.value;

</script>
<style lang="scss" scoped>


</style>
