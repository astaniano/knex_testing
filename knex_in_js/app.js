const express = require("express");
const connectionKnex = require("knex");

const app = express();
const port = 5000

const knex = connectionKnex({
    client: "pg",
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'root',
        database: 'web_store',
        port: 5432
    }
});


app.get('/first', async (req, res) => {
    try {
        const ress = await knex('users')
            .leftJoin(
                'descriptions',
                `descriptions.user_id`,
                `users.id`
            )
            .select(
                `users.id`,
                `users.email`,
                knex.raw(`ARRAY_REMOVE(ARRAY_AGG(user_id), NULL) as users`)
            )
            .limit(10)
            .groupBy(`users.id`);

        console.log(ress);

        if (ress) {
            res.json(ress);
            return
        }
    } catch (e) {
        console.log(e);
    }

    res.json(alibaba())
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
