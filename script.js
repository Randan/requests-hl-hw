let idArr;
let t = 0;

const randomInteger 
    = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const randomArray
    = () => {
        idArr = [];
        for (i = 0; i < 5; i++) {
            idArr.push(randomInteger(1, 100));
        }
        return idArr;
    }

function asyncReq(q, url) {
    if (!q) q = 100;
    if (!url) url = 'https://jsonplaceholder.typicode.com/todos/';

    Promise.all(
        randomArray().map((id) => fetch(url + id)
            .then((resp) => resp.json()))
        )
        .then(console.log)
        .catch(console.error);

    t++;
    if (t === q) return false;
    asyncReq(q, url);
}

asyncReq();