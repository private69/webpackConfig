function add(...params) {
    if (!params.length) return 0;
    let sum = 0
    params.forEach(val => {
        sum += Number(val)
    })
    return sum
}
// console.log(add(1, 2, 3, 4, 5, 6))

module.exports = add