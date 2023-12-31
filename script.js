const product = [
    {
        id: 0,
        image: 'image/Pink_Roses_24.jpg',
        title: 'Pink Roses',
        price: 400,
    },
    {
        id: 1,
        image: 'image/radiance.jpg',
        title: 'Radiance',
        
        price: 450,
    },
    {
        id: 2,
        image: 'image/sun&red.jpg',
        title: 'Sunflowers & Red roses',
        price: 300,
    },
    {
        id: 3,
        image: 'image/mixe.jpg',
        title: 'Mixed roses',
        price: 250,
    },
    {
        id: 4,
        image: 'image/Pink-rose-garden.jpg',
        title: 'Pink Rose Garden',
        price: 350,
    },
    {
        id: 5,
        image: 'image/white-rose-bouquet.webp',
        title: 'White Rose Bouquet',
        price: 200,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById("root").innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displayCart();
}

function delElement(a){
    cart.splice(a, 1);
    displayCart();
}
function displayCart(a){
    let j=0, total=0;
    document.getElementById('count').innerHTML=cart.length;
    document.getElementById("total").innerHTML = "R " +0+" .00";
    if(categories.length == 0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R "+total+" .00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++)+ ")'></i></div>"
            );
        }).join('')
    }
}