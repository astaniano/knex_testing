const { promisify } = require("util");

const redisClient = {
    get: function(key, cb) {
        cb(null, "");
    },
    set: () => {},
    keys: () => {},
    del: () => {},
}

async function anyAA() {
    try {
        const getAsync = promisify(redisClient.get).bind(redisClient);
        // const getAsync = promisify(redisClient.get);
        const rr = await getAsync("dsadsad");
        console.log(rr);

        // redisClient.get('key: nana', function (err, data) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log(data);
        // })

        const dd = 'the end';
        console.log(dd)
    } catch (e) {
        console.error(e)
    }
}
anyAA()
