export default {
    offersCalculate: {
        percentage: (prop) => prop.price - (prop.price * prop.value / 100),
        slice: (prop) => prop.price - Math.floor(prop.price / prop.step) * prop.value,
        minus: (prop) => prop.price - prop.value
    }
}