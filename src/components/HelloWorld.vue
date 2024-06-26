<template fluid class="body">
  <v-container>
    <v-row>
      <v-sheet class="rounded" width="400" height="350">
        <v-form fast-fail @submit.prevent>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field prepend-inner-icon="mdi-email-outline" density="compact" v-model="textMaterial"
                  :rules="textMaterialRules" label="text material"></v-text-field>
              </v-col>
            </v-row>

            <v-row class="mt-8" justify="end">
              <v-col cols="auto">
                <v-btn @click="run" color="#183255" type="submit">submit</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      res: '',
      textMaterial: '',
      textMaterialRules: [
        (value: string | undefined) => {
          if (value?.length != 0) return true

          return 'An error message.'
        }
      ]
    }
  },

  methods: {
    run() {
      console.log(this.textMaterial)
      this.res = 'error message'
    }
  }
})
</script>
<style>
.body {
  background-size: cover;
  height: 100vh;
}
</style>
