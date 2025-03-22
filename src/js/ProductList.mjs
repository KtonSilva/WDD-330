import { products } from "./ProductData.mjs";

class ProductList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.render();
    }

    render() {
        if (!this.container) {
            console.error("Container not found");
            return;
        }
        
        this.container.innerHTML = "";
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product-item");
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            this.container.appendChild(productElement);
        });
    }
}

export default ProductList;
