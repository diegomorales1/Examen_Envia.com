//Variables para el carrito de compra, seleccionado el tipo o clase de la variable que adopta
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
    '.container-cart-products'
);

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

//Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

//Lista donde se guardaran todos los productos que se añadieron al carrito
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

//Aqui ocurren los eventos de añadir productos al carrito, añadiendo a la lista el producto con su nombre y precio, mediante la lectura del formato h2 para el nombre
//y p para el precio
productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );
        
        //Aqui se comprueba si el producto seleccionado estaba ya en el carrito, si esta, simplemente se le suma uno a la cantidad, pero si no estaba se tiene que añadir como producto nuevo a la lista
        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    //Apartado para eliminar un producto del carrito
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
    //Logica para incrimentar la cantidad de un producto si se le da click al boton +
    if (e.target.classList.contains('btn-increase')) {
        const product = e.target.closest('.cart-product');
        const title = product.querySelector('.titulo-producto-carrito').textContent;

        allProducts = allProducts.map(product => {
            if (product.title === title) {
                product.quantity++;
            }
            return product;
        });

        showHTML();
    }
    //Logica para decrecer la cantidad de un producto si se le da click al boton -
    if (e.target.classList.contains('btn-decrease')) {
        const product = e.target.closest('.cart-product');
        const title = product.querySelector('.titulo-producto-carrito').textContent;

        allProducts = allProducts.map(product => {
            if (product.title === title && product.quantity > 1) {
                product.quantity--;
            }
            return product;
        });

        showHTML();
    }
});

//Funcion para mostrar HTML
const showHTML = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }


    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');
        
        //Aqui se encuentran los botones para añadir o quitar productos del carrito, solo lo visual que se debe de encontrar el par en cada producto del carrito
        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <button class="btn-decrease">-</button>
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <button class="btn-increase">+</button>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

        //Dependiendo de la cantidad que haya en el carrito por el tema de incrementar o decrecer la cantidad, aquellos efectos se ven reflejados en el total de la compra final
        total =
            total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};

//Mensaje popup que sale cuando damos en comprar en el carrito, este ultimo elimina todos los elementos de la lista simulando la compra
function openPopup() {
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

popup.style.display = 'block';
overlay.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.style.display = 'none';
    overlay.style.display = 'none';
}

const btnCheckout = document.createElement('button');
btnCheckout.textContent = 'Comprar Ahora';
btnCheckout.classList.add('btn-checkout');
btnCheckout.addEventListener('click', () => {
    allProducts = [];
    showHTML();
    openPopup();
});

document.querySelector('.cart-total').appendChild(btnCheckout);