import fs from 'fs'

const shopCategory = () => {
    fs.readFile('./src/q13/shop.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            process.exit()
        }

        const categories = {}

        const shops = JSON.parse(data)
        shops.forEach(item => {
            const category = item.category
            if(categories[category]){
                const clone = [...categories[category], item]
                categories[category] = clone 
            }else{
                categories[category] = [item]
            }
        });
        console.log(categories)
        process.exit()
    })
}

export default shopCategory