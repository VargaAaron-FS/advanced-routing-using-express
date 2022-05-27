const { Product } = require("../models");

const index = async (req, res) => {
    const product = await Product.findAll();
    res.render('views/products/index', { product });
    // res.json(products);
};

const form = async (req, res) => {
    // res.send("Product.form");
    if (typeof req.params.id !== "undefined") {
        const product = await Product.findByPk(req.params.id);
        res.render('views/products/edit', { product })
    } else {
        res.render('views/products/create');
    }
};

const show = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    res.render('views/products/show', { product });
    // res.json(product);
};

const create = async (req, res) => {
    // const product = Products.create(req.body);
    const product = await Product.create(req.body);
    res.redirect('/products/' + product.id);
    // res.json(product);
};

const update = (req, res) => {
    const product = Product.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.redirect('/products/' + req.params.id);
    // res.json(product);
};

const remove = async (req, res) => {
    const product = await Product.destroy({ where: { id: req.params.id }});
    res.redirect('/products');
    // res.json(product);
};

module.exports = { index, form, show, create, update, remove };