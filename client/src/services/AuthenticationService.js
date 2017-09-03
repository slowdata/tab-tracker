import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   emails: 'test@gmail.com',
//   password: '123456'
// })
