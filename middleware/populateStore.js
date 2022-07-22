export default function ({ app, store }) {
  const account = app.context.app.$cookies.get('account')
  const token = app.context.app.$cookies.get('token')
  if (account) {
    store.commit('auth/SET_ACCOUNT', app.context.app.$cookies.get('account'))
  }
  if (token) {
    store.commit('auth/SET_TOKEN', app.context.app.$cookies.get('token'))
  }
}
