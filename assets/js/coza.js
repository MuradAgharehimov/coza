const div = document.getElementById("productsList");
const btn = document.getElementById("pagi");

let page = 1;
let limit = 12;
let db = [];

async function getProducts() {
    let skip = (page - 1) * limit;

    try {
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
        const data = response.data;
        db = data;

        data.forEach(item => {
            const box = document.createElement("div");
            box.className = "boxDiv";
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <p class="title">${item.title}</p>
                <button onclick="addToBasket(${item.id})">Add to basket</button>
            `;
            div.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

btn.addEventListener('click', getProducts);

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedItem = db.find(item => item.id == id);
    cart.push(selectedItem);
    localStorage.setItem('cart', JSON.stringify(cart));
}

window.onload = () => {
    getProducts();
};



function getbyname () {
    abcd.innerHTML = ``
    abc.style.display='none'
    abcd.style.display='block'

    axios.get('https://655c81de25b76d9884fd6913.mockapi.io/products')
    .then(res => {
        db = res.data
        let sortedData = db.sort((a, b) => a.price - b.price)      
        sortedData.map(item => {
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${item.title}</p>`
            abcd.append(div)
        })

    })
}
btn.addEventListener('click', getbyname)



const search = document.getElementById('search')
const inp = document.getElementById('inp')
const searchByName = document.getElementById('searchByName')

function searchh() {
    div.style.display = 'none'
    searchByName.style.display = 'block'

    axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products`)
        .then(res => {
            db = res.data
            let filteredData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
            console.log(filteredData);
            filteredData.map(item => {
                const box = document.createElement('div')
                box.className = 'myBox col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'
                box.innerHTML = `
            <img src="${item.image}" alt="">
            <h5>${item.name}</h5>
            <p>${item.title}</p>
            `;
                searchByName.appendChild(box);
            });
        });
};

search.addEventListener('click', searchh)
window.onload = () => {
    getProducts()
}