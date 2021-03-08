import * as firebase from 'firebase/app'

export default context => {
  const { store } = context
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return resolve(store.dispatch('autoSignIn', user))
      }
      return resolve()
    })
  })
}

