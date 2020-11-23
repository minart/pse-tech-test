export const state = () => ({
    products: []
});

export const getters = {
    products:   (state) => state.products,
    total:      (state) => state.products.reduce((acc, value) => value.totalPrice + acc, 0),
    count:      (state) => state.products.reduce((acc, value) => value.quantity + acc, 0),
    getAllIsbn: (state) => state.products
                            .map(product => Array(product.quantity).fill(product.isbn))
                            .join()
};

export const actions = {
    add({ dispatch, commit, state }, pProduct){
        const productExist = state.products.find(product => product.isbn === pProduct.isbn);
        (productExist)
            ? commit('ADD_EXISTED_PRODUCT_TO_CARD', productExist)
            : commit('ADD_PRODUCT_TO_CARD', pProduct)
    },
    remove({ commit, state }, index){
        const product = state.products[index];
        (product.quantity > 1)
            ? commit('REMOVE_EXISTED_PRODUCT_FROM_CARD', product)
            : commit('REMOVE_PRODUCT_FROM_CARD', index)
    },
    clear(){
        commit('REMOVE_PRODUCTS_FROM_CARD');
    }
};

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
};