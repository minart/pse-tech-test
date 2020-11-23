export default $axios => resource => ({
    books : () => $axios.get(`${resource}`),
    offers : (isbns) => $axios.get(`${resource}/${isbns}/commercialOffers`)
})