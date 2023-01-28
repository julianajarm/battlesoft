<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-row class="fill-height">
          <v-col cols="8">
            <BattleGround/>
          </v-col>
          <v-col cols="4">
            <HeroPool/>
            <EnemyPool/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeroPool from '@/components/HeroPool.vue';
import EnemyPool from '@/components/EnemyPool.vue';
import BattleGround from "@/components/BattleGround.vue";

export default {
  name: 'App',
  components: {
    BattleGround,
    EnemyPool,
    HeroPool
  }
}
</script>

<style>
#app {
}
</style>
