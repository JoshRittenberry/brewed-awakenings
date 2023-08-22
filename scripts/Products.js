import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const productId = clickTarget.dataset.productId

        for (const product of products) {
            if (product.id === parseInt(productId)) {
                window.alert(`${product.name} costs \n$${product.price}`)
            }            
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += 
        `<li
        data-type="product"
        data-product-id="${product.id}"
        >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

