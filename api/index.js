import axios from 'axios'

const instance = axios.create()

class Api {
  __jsonRequest(method, url, data = {}, params = {}, contentType = undefined) {
    return instance.request({
      url,
      method,
      data: {
        ...data,
      },
      headers: {
        'Content-Type':
          contentType !== undefined ? contentType : 'application/json',
        ...(this.token ? { Authorization: 'Bearer ' + this.token } : {}),
      },
    })
  }

  async __request(method, url, data = undefined) {
    try {
      url = url.includes('http') ? url : `${this.base}${url}`
      const res = await this.__jsonRequest(method, url, data)

      if (res.data.success) {
        return res.data
      }
      return Promise.reject(res.data)
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401) {
          localStorage.clear()
          // window.document.cookie =
          //   'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
          // window.document.cookie =
          //   'account=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
          // window.document.cookie =
          //   'kyc=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
          window.location.href = '/'
          return false
        }
        return Promise.reject(e.response.data)
      }
      return Promise.reject(e)
    }
  }

  setToken(token) {
    this.token = token
  }

  setBase(base) {
    this.base = base
  }

  setDomain(domain) {
    this.domain = domain
  }

  /*
   * Authentication
   * */
  register(data) {
    return this.__request('post', '/users/register', data)
  }

  registertoBuyCourse(data) {
    return this.__request('post', '/users/register-partial', data)
  }

  login({ email, password }) {
    return this.__request('post', '/users/login', {
      email,
      password,
    })
  }

  forgotPassword(email) {
    return this.__request('post', '/users/account/forgot', {
      email,
    })
  }

  resetPassword(password, token) {
    return this.__request('post', '/users/account/reset/' + token, {
      password,
    })
  }

  forgotPasswordVerify(email, code) {
    return this.__request('post', '/user/auth/reset-password/verify', {
      email,
      code,
    })
  }

  forgotPasswordReset(email, code, password) {
    return this.__request('post', '/user/auth/reset-password/rest', {
      email,
      code,
      password,
    })
  }

  /*
   * Profile
   * */
  getProfile() {
    return this.__request('get', '/users/profile')
  }

  updateProfile(data) {
    return this.__request('patch', '/users/profile', data)
  }

  updateProfilePartially(data) {
    return this.__request('post', '/users/update-partial', data)
  }

  updatePassword(data) {
    return this.__request('patch', '/users/account', data)
  }

  /*
   * Earnings
   * */
  getBankList() {
    return this.__request('get', '/users/bank/list')
  }

  getUserBankDetails() {
    return this.__request('get', '/users/bank/details')
  }

  getAffiliateEarnings() {
    return this.__request('get', '/users/affiliate/earnings')
  }

  /*
   * Courses
   * */
  getCourses(page = 1, limit = 10) {
    return this.__request('get', `/courses/live?page=${page}&limit=${limit}`)
  }

  getTrendingCourses() {
    return this.__request('get', '/courses/trending')
  }

  getCourse(slug) {
    return this.__request('get', `/courses/${slug}`)
  }

  getEnrolledCourses() {
    return this.__request('get', '/courses/enrolled')
  }

  getEnrolledCourse(id) {
    return this.__request('get', `/courses/enrolled/${id}`)
  }

  /*
   * Cart
   * */
  getCart() {
    return this.__request('get', '/cart')
  }

  addCourseToCart(courseId) {
    return this.__request('post', `/cart/${courseId}`)
  }

  removeCourseFromCart(courseId) {
    return this.__request('delete', `/cart/${courseId}`)
  }

  checkoutCart(paymentProviderId) {
    return this.__request('post', '/cart/buy', {
      paymentProviderId,
    })
  }

  /*
   * Payment and Transactions
   * */
  getPaymentProviders() {
    return this.__request('get', '/transaction/providers')
  }

  verifyTransaction(reference, refCode) {
    const ref = refCode ? `?affiliateReferralCode=${refCode}` : ''
    return this.__request('get', `/transaction/verify/${reference}${ref}`)
  }
}

export default new Api()
