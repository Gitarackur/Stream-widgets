export default function ({ app, redirect }) {
  if (!app.context.app.$cookies.get('token')) {
    return redirect('/login')
  }
}
