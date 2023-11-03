import fs from 'fs'

const userJson = (user) => {
    return new Promise((resolve, reject) => {
        const path = `./src/fq1/q18/org/${user.organization}/${user.national_code}`
        fs.writeFileSync(`${path}/${user.first_name}-${user.id}.json`, JSON.stringify(user), 'utf8', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('JSON file created successfully.');
            }
        })
        resolve()
    })
}

const userCreate = (user) => {
    return new Promise((resolve, reject) => {
        const path = `./src/fq1/q18/org/${user.organization}/${user.national_code}`
        fs.mkdirSync(path, { recursive: true }, (err) => {
            if (err) {
                console.error(err);
            }
        })
        resolve()
    }) 
}

const exployeeDir = async() => {
    fs.readFile('./src/fq1/q18/users.json', 'utf8', async (err, data) => {
        if (err) {
            console.error(err)
            process.exit()
        }

        const users = JSON.parse(data)

        for (const iterator of users) {
            await userCreate(iterator)
        }
        for (const iterator of users) {
            await userJson(iterator)
        }

        process.exit()

    })
}

export default exployeeDir