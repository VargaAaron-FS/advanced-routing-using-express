let products = [
    { id: "1", slug: "nike-shoe", title: "Nike Shoe", price: "99.99" },
    { id: "2", slug: "adidas-shoe", title: "Adidas Shoe", price: "99.99" },
    { id: "3", slug: "jordans-shoe", title: "Jordans Shoe", price: "99.99"},
    { id: "4", slug: "reebok-shoe", title: "Reebok Shoe", price: "99.99" }
];

const all = () => {
    return products;
};

const find = (id) => {
    return products.find((p) => p.id === id);
};

const create = (product) => {
    product.id = Number(products[products.length - 1].id) + 1 + "";
    products.push(product);
    return products[products.length - 1];
};

const update = (id, product) => {
    products = products.map((p) => {
        return p.id === id ? product : p;
    });
    return products;
};

const remove = (id) => {
    products = products.filter((p) => p.id !== id);
    return products;
};

module.exports = { all, find, create, update, remove };