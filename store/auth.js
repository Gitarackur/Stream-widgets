/** ***** sample auth store ***************/

export const defaultState = () => ({
  loading: false,
  account: null,
  token: null,
})

export const state = defaultState

export const getters = {
  isAuthenticated: (state) => !!state.account && !!state.token,
  accountFullName: (state) => {
    return state.account.firstName + ' ' + state.account.lastName
  },
  getAccount: (state) => state.account,
}

export const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_ACCOUNT(state, data) {
    this.$cookies.set('account', data, {
      path: '/',
      expires: new Date(Date.now() + 60 * 60 * 2 * 1000),
    })
    state.account = data
  },
  SET_TOKEN(state, data) {
    this.$cookies.set('token', data, {
      path: '/',
      expires: new Date(Date.now() + 60 * 60 * 2 * 1000),
    })
    state.token = data
  },
  RESET_STATE(state) {
    Object.assign(state, defaultState())
  },
}

export const actions = {
  async register(context, data) {
    context.commit('SET_LOADING', true)
    const { email, password, firstName, lastName } = data
    try {
      const res = await this.$api.register({
        email,
        password,
        firstName,
        lastName,
      })
      if (res && res.data) {
        this.$api.setToken(res.data.token)
        context.commit('SET_ACCOUNT', res.data.account)
        context.commit('SET_TOKEN', res.data.token)
        return res
      }
    } finally {
      context.commit('SET_LOADING', false)
    }
  },
  async registertoBuyCourse(context, data) {
    context.commit('SET_LOADING', true)
    try {
      const res = await this.$api.registertoBuyCourse(data)
      if (res && res.data) {
        this.$api.setToken(res.data.token)
        context.commit('SET_ACCOUNT', res.data.account)
        context.commit('SET_TOKEN', res.data.token)
        await context.dispatch('cart/syncCart', null, { root: true })
        return res
      }
    } finally {
      context.commit('SET_LOADING', false)
    }
  },
  async updateProfilePartially(context, data) {
    context.commit('SET_LOADING', true)
    try {
      const res = await this.$api.updateProfilePartially(data)
      return res
    } finally {
      context.commit('SET_LOADING', false)
    }
  },
  async login(context, data) {
    context.commit('SET_LOADING', true)
    const { email, password } = data
    try {
      const res = await this.$api.login({
        email,
        password,
      })
      if (res && res.data) {
        this.$api.setToken(res.data.token)
        context.commit('SET_ACCOUNT', res.data.account)
        context.commit('SET_TOKEN', res.data.token)
        await context.dispatch('cart/syncCart', null, { root: true })
        return res
      }
    } finally {
      context.commit('SET_LOADING', false)
    }
  },
  async forgotPassword(context, { email }) {
    context.commit('SET_LOADING', true)
    try {
      const res = await this.$api.forgotPassword(email)
      if (res) {
        return res
      }
    } finally {
      context.commit('SET_LOADING', false)
    }
  },
  async resetPassword(context, { password, token }) {
    context.commit('SET_LOADING', true)
    try {
      const res = await this.$api.resetPassword(password, token)
      if (res) {
        return res
      }
    } finally {
      context.commit('SET_LOADING', false)
    }
  },
  reset(context) {
    context.commit('RESET_STATE', true)
  },
}
