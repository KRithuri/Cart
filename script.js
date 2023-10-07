const product = [
    {
        id: 0,
        image: 'image/Pink_Roses_24.jpg',
        title: 'Pink Roses',
        price: 400,
    },
    {
        id: 1,
        image: 'image/mixe.jpg',
        title: 'Mixed roses',
        price: 450,
    },
    {
        id: 2,
        image: 'image/mixed-st-joseph-lily-bunch.webp',
        title: 'St Joseph Lilly Bunch',
        price: 300,
    },
    {
        id: 3,
        image: 'image/radiance.jpg',
        title: 'Radiance',
        price: 200,
    },
    {
        id: 4,
        image: 'image/Pink-rose-garden.jpg',
        title: 'Pink Rose Garden',
        price: 250,
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