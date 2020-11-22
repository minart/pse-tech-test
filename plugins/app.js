import AppApi from "~/api/books";
export default (ctx, inject) => {
    ctx.$axios.setBaseURL('http://henri-potier.xebia.fr');
    const ressource = AppApi(ctx.$axios);
    inject("api", ressource('/books'));
};