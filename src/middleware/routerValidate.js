
// export default function ({ store, redirect, route }) {
//   if (process.server) {
//     !store.getters.user ? redirect('/Auth/login') : ''
//   } else if (process.client) {

//     store.getters.user && route.name == 'Auth-login' ? redirect('/profile') : ''
//   } else {
//     redirect('/' + route.name)
//   }
// }