export const state = () => ({
    products: [],
})

export const getters = {
    getContent: (state) => state.products,
    getTotalProductsPrice: (state) => state.products.reduce((acc, value) => value.totalPrice + acc, 0),
    getTotalProducts: (state) => state.products.reduce((acc, value) => value.quantity + acc, 0),
    getAllProductsIsbn: (state) => state.products.map(product => product.isbn)
}

export const actions = {
    add({ commit, state }, pProduct){
        const productExist = state.products.find(product => product.isbn === pProduct.isbn);
        if(productExist){
            commit('ADD_EXISTED_PRODUCT_TO_CARD', productExist);
        } else {
            commit('ADD_PRODUCT_TO_CARD', pProduct);
        }
    },
    remove({ commit, state }, index){
        const product = state.products[index];
        if(product.quantity > 1)
            commit('REMOVE_EXISTED_PRODUCT_FROM_CARD', product);
        else
            commit('REMOVE_PRODUCT_FROM_CARD', index);
    },
    clear(){
        commit('REMOVE_PRODUCTS_FROM_CARD');
    }
}

export const mutations = {
    ADD_PRODUCT_TO_CARD(state, product) {
        state.products.push({ ...product, quantity: 1, totalPrice: product.price });
    },
    ADD_EXISTED_PRODUCT_TO_CARD(state, product){
        product.quantity++;
        product.totalPrice = product.totalPrice + product.price;
    },
    REMOVE_PRODUCT_FROM_CARD : (state, index) => {
        state.products.splice(index, 1);
    },
    REMOVE_EXISTED_PRODUCT_FROM_CARD : (state, product) => {
        product.quantity--;
        product.totalPrice = product.totalPrice - product.price;
    },
    REMOVE_PRODUCTS_FROM_CARD(state){
        Object.assign(state, state());    
    }
}