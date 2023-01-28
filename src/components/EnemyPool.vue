<template>
  <v-card class="mb-4" elevation="4">
    <v-card-title>Enemy</v-card-title>
    <v-card-text>
      <v-list style="max-height: 300px" class="overflow-y-auto">
        <v-list-item v-for="(enemy, n) in enemies" :key="n">
          <template v-slot:prepend>
            <v-list-item-action>
              <v-btn color="indigo" size="x-small" icon>
                <v-icon icon="mdi-arrow-collapse-left"></v-icon>
                <v-tooltip activator="parent" location="left">To battle</v-tooltip>
              </v-btn>
            </v-list-item-action>
          </template>
          <template v-slot:append>
            <v-list-item-action>
              <v-btn @click="removeEnemy(n)" color="indigo" size="x-small" icon>
                <v-icon icon="mdi-pail-remove"></v-icon>
                <v-tooltip activator="parent" location="top">Remove</v-tooltip>
              </v-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title v-text="enemy.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click.stop="newEnemyDialog = true" color="deep-purple" elevation="4" outlined>
        <v-icon icon="mdi-plus"></v-icon>
        Add
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-dialog v-model="newEnemyDialog" max-width="600px">
    <v-card>
      <v-card-title class="text-h5">New Enemy</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field v-model="newEnemy.name" required label="Name"></v-text-field>
            </v-col>
            <v-col>
              <div class="text-caption">
                Initiative
              </div>
              <v-slider v-model="newEnemy.initiative" :min="0" :max="20" step="1">
                <template v-slot:append>
                  <v-text-field v-model="newEnemy.initiative" hide-details single-line density="compact" type="number" style="width: 70px"></v-text-field>
                </template>
              </v-slider>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="addEnemy()" color="deep-purple" elevation="4" outlined>
          Apply
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
import {Storage} from "@/models/storage";

export default {
  name: "EnemyPool",
  data() {
    return {
      storage: new Storage('enemies'),
      enemies: [],
      newEnemy: {},
      newEnemyDialog: false
    }
  },
  mounted() {
    this.loadEnemies()
  },
  methods: {
    addEnemy() {
      if (!this.newEnemy.name) {
        return;
      }
      this.enemies.push({name: this.newEnemy.name})
      this.newEnemy = {}
      this.newEnemyDialog = false
      this.saveEnemies()
    },
    removeEnemy(x) {
      this.enemies.splice(x, 1)
      this.saveEnemies()
    },
    loadEnemies() {
      this.enemies = this.storage.load()
    },
    saveEnemies() {
      this.storage.save(this.enemies)
    }
  }

}
</script>

<style scoped>

</style>