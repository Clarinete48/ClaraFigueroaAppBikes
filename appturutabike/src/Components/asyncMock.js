const products = [
    {
        id: '1',
        name: 'Santa Cruz Bullit',
        price: 10.000,
        category: 'santacruz',
        img: 'https://ltmracing.com/22057-large_default/e-bike-santa-cruz-bullit--cc-mx-kit-xt-coil-.jpg',
        stock: 15 ,
        description: 'La E-BIKE SANTA CRUZ BULLIT 3 CC MX KIT XT COIL 2022 es la bicicleta para ciclistas que buscan descensos fuera del alcance del telesilla o camino de remonte. Está diseñada para abordar los senderos más empinados en ambas direcciones.'

    },

    { id: '2', name: 'Trek Marlin 5', price: 700, category: 'trek', img: 'https://sparta.cl/media/catalog/product/m/a/marlin5_22_34587_a_primary.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550', stock: 80 , description: 'Nueva transmisión Shimano Altus 2X8. Suspensión delantera SR Suntour XCT 30, bloqueo, recorrido de 100 mm (xs 80mm) Llantas de doble pared y los potentes frenos de disco hidráulicos le brindan seguridad y potencia de frenado.'},
    { id: '3', name: 'Juliana Furtado 5', price: 6.800, category: 'juliana', img: 'https://cdn.shopify.com/s/files/1/0016/3856/3907/products/Screenshot2022-09-065.08.18PM_720x.png?v=1662509307', stock: 10 , description: 'La Furtado es más que una bici, es tu compañera de aventuras. Desde senderos sinuosos hasta jardines de rocas, la maniobrabilidad inigualable de la Furtado la convierte en la aliada perfecta para cualquier escape.'}

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}