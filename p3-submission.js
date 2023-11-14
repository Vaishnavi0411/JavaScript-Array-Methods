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


//Find the inventory of each product type using arrow functions
//Pass the products as parameter to the function
function findProductInventory(product){
    let productCount=product.reduce((x,y) =>{
        const {productName}=y;
        if(x[productName]){
            x[productName].stock++;
        }
        else {
            x[productName] = { productName, stock: 1 };
        }
        return x;
    },{});
    const resultArray = [];
    for (const data in productCount) {
        resultArray.push(productCount[data]);
    }
    return resultArray;
}


// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findProductInventory
}