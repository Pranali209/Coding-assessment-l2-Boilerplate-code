

async function dataFetching(params) {
    const products = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
    const data = await products.json();
    console.log(data);
    if (data) {
        data.categories.map((category) => {
            if (category.category_name === 'Men') {
                category.category_products.map((product) => {
                    const newContainer = document.createElement('div')
                    newContainer.classList.add('product-image-container')
                    newContainer.innerHTML = `<img src= "${product.image}"/>
                 <div class="product-card">
                <div class="product-name"><b>${product.title.substring(0,20) + (product.title.length > 20 ? '..':"")}</b> - ${product.vendor}</div>
                     <div class="price-section">
                         <span class="discounted-price">Rs ${product.price}.00</span>
                         <span class="original-price">${product.compare_at_price}.00</span>                       
                         <span class="discount-tag">${(((product.compare_at_price - product.price) / product.compare_at_price) * 100).toFixed(1)}%OFF</span>
                     </div>
                     <a href="#" class="add-to-cart-btn">Add to Cart</a>`
                    document.querySelector('.product-container').appendChild(newContainer)

                })
            }


        })
    }

    return data

}
 dataFetching().then((data1) => {

const radioBtn = document.querySelectorAll('input[type = "radio"]')
radioBtn.forEach((btn) => {
    btn.addEventListener('change', () => {
        document.querySelector('.product-container').innerHTML = ""
        const label = btn.nextElementSibling
        if (label) {
            const labeltext = label.textContent.trim().replace(label.querySelector('i').textContent, '');
            console.log(labeltext);
            data1.categories.map((category) => {
             
                if (category.category_name == labeltext)
                    category.category_products.map((product) => {
                        const newContainer = document.createElement('div')
                        newContainer.classList.add('product-image-container')
                        newContainer.innerHTML = `<img src= "${product.image}"/>
                         <div class="product-card">
                        <div class="product-name"><b>${product.title.substring(0,15) + (product.title.length > 15 ? '..':"")}</b> - ${ product.vendor}</div>
                             <div class="price-section">
                                 <span class="discounted-price">Rs ${product.price}.00</span>
                                 <span class="original-price">${product.compare_at_price}.00</span>                       
                                 <span class="discount-tag">${(((product.compare_at_price - product.price) / product.compare_at_price) * 100).toFixed(1)}%OFF</span>
                             </div>
                             <a href="#" class="add-to-cart-btn">Add to Cart</a>`
                        document.querySelector('.product-container').appendChild(newContainer)

                    })

            })
        }
    })
})
})













