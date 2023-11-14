const product = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the inventory of each non-premium products using function chaining
//Pass the products as parameter to the function
function findInventoryUsingFunctionChaining(product) {
    const productCount = product
        .filter(z => z.price <= 300)
        .reduce((x, y) => {
            const { productName } = y;
            if (x[productName]) {
                x[productName].stock += 1;
            }
            else {
                x[productName] = { productName, stock: 1 };
            }
            return x;
        }, {});
    let resultArray = [];
    for (let data in productCount) {
        resultArray.push(productCount[data]);
    }
    return resultArray;
}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findInventoryUsingFunctionChaining
}


