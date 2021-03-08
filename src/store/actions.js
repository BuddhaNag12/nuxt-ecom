export default {

     fetchFromFirestore({commit}){
        commit('setLoading',true)
         this.$fireStore.collection("products")
        .onSnapshot(function(querySnapshot) {
            let newProducts=[]
            querySnapshot.forEach(function(doc) {
               newProducts.push(doc.data())
            })
            commit('setLoading',false)
            commit('setDbProducts',newProducts)
        });
    },
    signUserUp({ commit }, payload) {
        commit('setLoading', true)
        this.$fireAuth.createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        email: user.email
                    }
                    commit('setUser', newUser)
                }
            )
            .catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                }
            )
    },

    removeProduct: (context, index) => {
        context.commit('REMOVE_PRODUCT', index);

    },
   async signUserIn({ commit }, payload) {
        commit('setLoading', true)
       await this.$fireAuth.signInWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.user.uid,
                        email: user.user.email
                    }
                    commit('setUser', newUser)
                    this.$router.push('/')
                }
            )
            .catch(
                e => {
                    commit('setLoading', false)
                    commit('setError', e)
                }
            )
    },
    async SignInWithFacebook({ commit }) {
        commit('setLoading', true)
        var provider = new this.$fireAuthObj.FacebookAuthProvider();
        await this.$fireAuth.signInWithPopup(provider).then((result) => {
            commit('setLoading', false)
            this.$router.push('/profile')
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            console.log(user);
            const newUser = {
                id: user.user.uid,
                email: user.user.email,
                name: user.user.displayName
            }
            commit('setUser', newUser)
        }).catch((error) => {
            commit('setError', error)
            commit('setLoading', false)
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
        });
    },
    async SignInWithGoogle({ commit }) {
        commit('setLoading', true)
        let provider = new this.$fireAuthObj.GoogleAuthProvider();

        await this.$fireAuth.signInWithPopup(provider).then((result) => {
            commit('setLoading', false)
            this.$router.push('/profile')
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            const newUser = {
                id: user.user.uid,
                email: user.user.email,
                name: user.user.displayName
            }
            commit('setUser', newUser)
        }).catch((error) => {
            commit('setError', error)
            commit('setLoading', false)
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;

        });
    },
    logout({ commit }) {
        commit('setLoading',true)
     this.$fireAuth.signOut().then(() => {
         this.$router.push('/Auth/login')
             commit('setLoading',false)
            commit('setUser', null)
            commit('clearError')
        })
        
    },
    autoSignIn({ commit }, payload) {
        if (!payload.displayName) {
            commit('setUser', { id: payload.uid, email: payload.email })
        } else {
            commit('setUser', { email: payload.email, name: payload.displayName, img: payload.photoURL })
        }

    },
}
