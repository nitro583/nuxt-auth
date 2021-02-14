<template>
  <v-container>
    <v-row wrap justify="center" align="center">
      <v-col :sm="12" :md="8">
        <h1 class="text-center">
          Snap × Snap
        </h1>
        <div class="pa-5">
          <v-btn
            block
            color="indigo darken-1"
            nuxt
            to="/sample"
            class="white--text"
          >
            サンプルページへ
          </v-btn>
        </div>
        <div class="pa-5">
          <v-btn block outlined color="grey darken-3" @click="signOut">
            ログアウト
          </v-btn>
        </div>
        <div>
          <h2>Firebaseを使った読み書き確認</h2>
          <input v-model="message" />
          <button @click="addMessage">
            メッセージを追加
          </button>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    }
  },
  methods: {
    signOut: function(err) {
      this.$store
        .dispatch("signOut")
        .then(() => {
          this.$router.push({
            name: "login"
          })
        })
        .catch(err => {
          alert(err.message)
        })
    }
  }
}
</script>
