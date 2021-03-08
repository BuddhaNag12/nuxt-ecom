
export default {

  setLoading(state,payload){
    state.loading=payload
  },
  setUser (state, payload) {
    state.authUser = payload
  },
  setError(state,payload){
    state.error=payload
  },
  setLoadedProducts(state, payload) {
    state.loadedProducts = payload
  },
  setDbProducts(state,payload){
    state.DbProducts=payload
  },
  REMOVE_PRODUCT(state, index) {
    state.cart.splice(index, 1)
    this.commit('saveData');
  },

  clearError(state) {
      state.error = null
  },
  setCart(state) {
    let cart = localStorage.getItem('cart');
    let newCArt = JSON.parse(cart)
    if (newCArt) {
      state.cart = []
      state.cart.push(...newCArt)
    }
  },
  // from home page
  // addToCart(state, item) {
  //   // let foundQuantity = state.loadedProducts.find(product => product.id == item.id)
  //   // if (foundQuantity) {
  //   //   foundQuantity.quantity -= 1
  //   // }
  //   let found = state.cart.find(product => product.id === item.id);
  //   if (!found) {
  //     const { name, price, id } = item
  //     state.cart.push({
  //       name,
  //       price,
  //       id,
  //       sQuantity: 1
  //     })
  //   } else {
  //     found.sQuantity++
  //     found.price += item.price
  //   }
  //   this.commit('saveData');
  // },
  // from view product
  AddToCart(state, item) {
    const { name, price, id, sQuantity } = item
    let parseQuantity = parseInt(sQuantity)
    let parsePrice = parseQuantity * price
    let cartExisting = state.cart.find(product => product.id === id);
    // let found = state.loadedProducts.find(product => product.id == id)
    if (cartExisting) {
      cartExisting.sQuantity += parseQuantity
      cartExisting.price += parsePrice
      // found.quantity -= parseQuantity
    } else {
      state.cart.push({
        name,
        price: price * parseQuantity,
        id,
        sQuantity: parseQuantity
      })

      // if (found) {
      //   found.quantity -= sQuantity
      // }
    }
    this.commit('saveData');
  },

  saveData(state) {

    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  },

  // Reset_cart(state, obj) {
  //   const { id, sQuantity } = obj
  //   let found = state.loadedProducts.find(product => product.id === id);
  //   if (found) {
  //     found.quantity += sQuantity
  //   }
  // },


}
