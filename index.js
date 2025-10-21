// const method = process.argv[2];
// const item = process.argv[3];

// console.log(method, item);

let [, , method, item] = process.argv;

// Items
// if (method == 'GET' && item.startsWith("items/")) {
//     const params = item.split("/");
//     console.log(params);
// }

// if (method === 'GET' && item == "item") {
//     fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(data => console.log(data));
// }

// Get single item
if (method === 'GET' && item.startsWith("items/")) {
    // const [, id] = item.split("/");
    let id = item.split("/")[1];
    id = parseInt(id);

    if (isNaN(id) || id <= 0) {
        console.log("Is not a number or it is less than 1");
    }

    fetch("https://fakestoreapi.com/products/" + id)
        .then((response) => response.json())
        .then((data) => console.log(data));
}
