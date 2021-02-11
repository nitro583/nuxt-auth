export default ({ store, route, redirect }) => {
  if (
    // ログイン前に見れるページを指定
    !store.getters.isAuthenticated &&
    route.name !== "login" &&
    route.name !== "/" &&
    route.name !== "register"
  ) {
    redirect("/login")
  }
  if (
    //ログインしたら遷移するページ
    store.getters.isAuthenticated &&
    (route.name === "login" || route.name === "register")
  ) {
    redirect("/mypage")
  }
}
