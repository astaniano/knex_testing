fs = require('fs');
const { promisify } = require("util");

const readFileAsync1 = promisify(fs.readFile);

const readFileAsync2 = (...args) => {
    return new Promise((res, rej) => {
        fs.readFile(...args, function (err, data) {
            if (err) {
                rej(err);
            }
            res(data);
        })
    })
}

// fs.readFile('./nana.txt', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// });

async function dd() {
    const ress = await readFileAsync2('./nana.txt', 'utf-8');
    console.log(ress);

    console.log(55454);
}

dd()