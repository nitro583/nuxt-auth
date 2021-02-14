<template>
  <v-container>
    <v-row wrap justify="center" align="center">
      <v-col :sm="12" :md="8">
        <h1 class="text-center">
          Mypage
        </h1>
        <div class="pa-5">
          <!--アカウント画像編集-->
          <div class="m-4 p-4 bg-white shadow rounded">
            <h2 class="text-2xl text-center text-darkGray">
              アカウント登録
            </h2>
            <form>
              <img src="~assets/person.svg" alt="person" />
              <input
                ref="image"
                type="file"
                style="display: none"
                accept="image/*"
              />
              <label>
                名前
              </label>
              <div class="h-20 mb-6">
                <input type="text" />
              </div>

              <!--アカウント画像編集ここまで-->
              <div class="flex">
                <button>
                  登録
                </button>
              </div>
            </form>
          </div>

          <v-btn
            block
            color="indigo darken-1"
            nuxt
            to="/upload"
            class="white--text"
          >
            UPLOAD
          </v-btn>
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
          <v-btn
            block
            color="indigo darken-1"
            nuxt
            to="/test"
            class="white--text"
          >
            testページへ
          </v-btn>
        </div>
        <div class="pa-5">
          <v-btn block outlined color="grey darken-3" @click="signOut">
            ログアウト
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
