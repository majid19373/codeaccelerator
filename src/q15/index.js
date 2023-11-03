import fs from 'fs'
import terminal from 'terminal-kit'
const term = terminal.terminal

const displayProducts = () => {
    fs.readFile('./src/q15/products.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            process.exit()
        }

        const products = JSON.parse(data)

        let allPrice = 0
        let discountsPrice = 0
        let finalPrice = 0

        products.forEach(item => {
            allPrice += item.price
            const discount = item.discount * item.price / 100
            const final = item.price - discount
            discountsPrice += discount
            finalPrice += final
        });

        term(`Total price of products: ${allPrice}\n`)
        term.red(`Total amount of discount: ${discountsPrice}\n`)
        term.green(`Total amount after discount: ${finalPrice}\n`)

        process.exit()

    })
}

export default displayProducts