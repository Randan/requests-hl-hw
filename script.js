




























const idArr = [2, 6, 15, 87, 98];
let time = 0;

function asyncReq(q, url) {
    if (!q) q = 100;
    if (!url) url = 'https://jsonplaceholder.typicode.com/todos/';
    if (time === q) return false;

    Promise.all(
        idArr.map((id) => fetch(url + id)
        .then((resp) => resp.json()))
    )
    .then(console.log);

    time++;
    asyncReq(q, url);
}

asyncReq();