import express from "express";
import knex from 'knex';
import alibaba from './alibaba';

const app = express();
const port = 5000

const connectionKnex = knex({
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
        const ress = await connectionKnex('descriptions')
            .sum("user_id");
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

app.get('/second', async (req, res) => {
    try {
        // const ress = await connectionKnex('descriptions')
        //     .where("user_id", '1')
        //     .first()
        //     .join('users', "descriptions.user_id", "users.id");
        //
        // console.log(ress);

    } catch (e) {
        console.log(e);
    }

    res.json(alibaba())
})

app.get('/third', async (req, res) => {
    try {
        // const ress = await connectionKnex('descriptions')
        //     .where("user_id", '1')
        //     .first()
        //     .join('users', "descriptions.user_id", "users.id");
        //
        // console.log(ress);

    } catch (e) {
        console.log(e);
    }

    res.json(alibaba())
})

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

export default app;
