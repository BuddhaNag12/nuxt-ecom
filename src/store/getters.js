export default{


    //this is working
    loadProducts: state => state.loadedProducts,

    
       loadedProduct (state) {
         return (productId) => {
           return state.loadedProducts.find((product) => {
             return product.id === productId
           })
         }
       },
      //  getSelectedCat: (state) => (Cat) => {
      //    return state.loadedProducts
      //      .filter(o => o.cat === Cat)
      //  },
       user (state) {
         return state.authUser
       },

  
     //   admin(state){
     //     return state.admin
     //   },
     //   loading (state) {
     //     return state.loading
     //   },
       error (state) {
         return state.error
       },
      loading:state=>state.loading,
       getProductsInCart: state => state.cart,
       getProductsFromDb:state=>state.loadedProducts
 }
 