import api from '../api'

export default ({ app, $config }, inject) => {
  api.setBase($config.API_BASE_URL)
  api.setToken(app.context.app.$cookies.get('a_token'))
  inject('api', api)
}
