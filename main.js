const productList = document.querySelector('.products__list');
const productForm = document.querySelector('.add-product__form');
const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const imageInput = document.querySelector('#image');

function renderProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    productList.innerHTML = '';

    products.forEach((product) => {
        const li = document.createElement('li');
        li.classList.add('product-item');
        li.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price}</p>
        `;
        productList.appendChild(li);
    });
}

function addProduct(event) {
    event.preventDefault();

    if (!nameInput.value || !priceInput.value || !imageInput.value) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const newProduct = {
        name: nameInput.value,
        price: priceInput.value,
        image: imageInput.value,
    };

    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);

    localStorage.setItem('products', JSON.stringify(products));

    productForm.reset();

    renderProducts();

    alert("Produto adicionado com sucesso!");
}

productForm.addEventListener('submit', addProduct);

document.addEventListener('DOMContentLoaded', renderProducts);
