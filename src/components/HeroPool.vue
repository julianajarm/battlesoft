<template>
  <v-card class="mb-4" elevation="4">
    <v-card-title>Heroes</v-card-title>
    <v-card-text>
      <ul>
        <li v-for="(hero, n) in heroes" :key="n">
          <span class="hero"> {{ hero.name }}</span>
          <button @click="removeHero(n)">REMOVE</button>
        </li>
      </ul>
    </v-card-text>
    <v-card-actions >
<!--      <input type="text" v-model="newHero">-->
<!--      <button @click="addHero()">Add Hero</button>-->
      <v-spacer></v-spacer>
      <v-btn color="deep-purple accent-4" elevation="4" outlined>Add</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {Storage} from "@/models/storage";

export default {
  name: "HeroPool",
  data() {
    return {
      storage: new Storage('heroes'),
      heroes: [],
      newHero: null,
    }
  },
  mounted() {
    this.heroes = this.storage.load()
  },
  methods: {
    addHero() {
      if (!this.newHero) {
        return;
      }
      this.heroes.push({name: this.newHero})
      this.newHero = '';
      this.saveHeroes();
    },
    removeHero(x) {
      this.heroes.splice(x, 1);
      this.saveHeroes();
    },
    saveHeroes() {
      this.storage.save(this.heroes)
    }
  }

}
</script>

<style scoped>

</style>

/*TODO
1. Данные, которые будут содержать объекты с данными героев.
2. Когда монтируется компонент, нужно, чтобы список загрузился из локал сторадж и чтобы в темплейте отрисовывался список: имя, характеристики
3. Кнопка "добавить", где можно будет добавить героя, в момент добавления - он идет в пул. И в локал сторадж. Весь пул пересохраняется в сторадж.
4. Кнопка удаления рядом с каждым героем.
*/