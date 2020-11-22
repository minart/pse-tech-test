export default $axios => resource => ({
    books(){
        return $axios.get(`${resource}`);
    },
    offers(isbns) {
        return $axios.get(`${resource}/${isbns}/commercialOffers`);
    }
})