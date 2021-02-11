<template>
  <div>
    <p class="text-center">
      ログインユーザのみ閲覧可能なコンテンツ
    </p>
    <p class="text-center">
      サンプルページ
    </p>
    <v-btn block color="indigo darken-1" nuxt to="/" class="white--text">
      トップページへ
    </v-btn>
    <v-btn block outlined color="grey darken-3" @click="signOut">
      ログアウト
    </v-btn>
  </div>
</template>
<script>
export default {
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
