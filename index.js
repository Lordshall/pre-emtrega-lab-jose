// const method = process.argv[2];
// const item = process.argv[3];

// console.log(method, item);

const [, , method, item] = process.argv;

// Items
if (method == 'GET' && item.startsWith("items/")) {
    const params = item.split("/");
    console.log(params);
}

if (method === 'GET' && item == "item") {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data));
}

