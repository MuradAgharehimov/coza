const div = document.getElementById('productsListx')

function getProducts () {
    div.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart);
    cart.map((item,index )=> {
        const box = document.createElement('div')
        box.className = "boxDiv";
        box.innerHTML =`
        
        
        
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <button onclick="removeItem(${index})">Remove from cart</button>

        `
        div.appendChild(box)
    })
}

function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}


   getProducts()
