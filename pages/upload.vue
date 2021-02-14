<template>
  <div>
    <h1>画像アップロード</h1>
    <div>
      <template v-if="form.imageUrl.val">
        <img
          :src="form.imageUrl.val"
          class="w-32 h-32 object-cover border rounded-full"
          @click="selectImage"
        />
      </template>
      <template v-else>
        <i class="material-icons text-7xl text-gray" @click="selectImage">
          person
        </i>
      </template>
      <input ref="image" type="file" accept="image/*" @change="onSelectFile" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        imageUrl: {
          val: null
        }
      }
    }
  },
  methods: {
    selectImage() {
      this.$refs.image.click()
    },
    onSelectFile(e) {
      const files = e.target.files
      if (files.length === 0) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.addEventListener("load", () => {
        this.upload({
          localImageFile: files[0]
        })
      })
    },
    async upload({ localImageFile }) {
      // const user = await this.auth()
      // //未ログインの場合はloginに遷移する
      // if (!user) this.$router.push("/login")

      //ストレージオブジェクトの宣言
      const storageRef = this.$fireStorage.ref()
      //ファイルのパスを設定
      const imageRef = storageRef.child(
        "images/${user.uid}/${localImageFile.name}"
      )
      //ファイルを適用してファイルアップロード開始
      const snapShot = await imageRef.put(localImageFile)
      this.form.imageUrl.val = await snapShot.ref.getDownloadURL()
    }
  }
}
</script>
