
export default () => ({
    DbProducts: [],
    loadedProducts: [
        { size:[
            's',
            'xs'
        ], name: 'hello', price: 12, id: '1', quantity: 10, description: 'nice products', img: "Footwear/shoes.jpg" },
        { size:[
            'l',
            'xs'
        ], name: 'ello', price: 55, id: '2', quantity: 5, description: 'nice products', img: "trousers/pents.jpg" },
        { size:[
            'm',
            'xs'
        ], name: 'llo', price: 66, id: '3', quantity: 11, description: 'nice products', img: "tshirts/shirt.jpg" },
        { size:[
            'xl',
            'xs'
        ], name: 'llo212', price: 646, id: '4', quantity: 11, description: 'nice products', img: "winterwear/winter.jpg" },
    ],
    user: null,
    users: [],
    admin: [],
    loading: false,
    error: null,
    currentProduct: {},
    cart: [],
    authUser: null
})
