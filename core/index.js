const slugify = (text) => text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');

const calculateFunction = {
    percentage: (prop) => prop.price - (prop.price * prop.value / 100),
    slice: (prop) => prop.price - Math.floor(prop.price / prop.step) * prop.value,
    minus: (prop) => prop.price - prop.value
}

const formatOffers = function(offers){
    return offers.map(offer => ({
        ...offer,
        calculate: function(price){
            return calculateFunction[this.type]({
                price,
                step: this.sliceValue,
                value: this.value
            });
        }
    }));
}

const getBestOffer = function(total, offers){
    const formatedOffers = formatOffers(offers);
    return formatedOffers
        .map(offer => ({ 
            type: offer.type, 
            total: offer.calculate(total)
        }))
        .reduce((acc, offer) => (!acc.total || acc.total > offer.total) ? acc = offer : acc);
}

export default {
    getBestOffer,
    slugify
}