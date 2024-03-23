let openCart = document.querySelector('.shopping-cart');
let closeCart = document.querySelector('.close-cart');
let productList = document.querySelector('.product-list');
let cartList = document.querySelector('.cart-list');
let body = document.querySelector('body');
let totalPrice = document.querySelector('.total-price');
let cartQuantity = document.querySelector('.cart-quantity');


openCart.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeCart.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'RS iso zero protein 33g 1.8kg',
        image: '1_1.png',
        price: 349,
        Discount: '450',
        type: 'RS - Supplements',
        About: "Only 6 left in stock",
        description_1: "Price",
        description_2: "quality",
        description_3: "health",
        rating: 10,
        Ratio: 15,
        badge: "bg-info",
        badge_text: "new",
        id: "myFunction_1",
        Link: 'product-single_1.html',
    },
    {
        id: 2,
        name: 'RS whey protein 25g 1.8kg',
        image: '2_1.png',
        price: 249,
        Discount: '350',
        type: 'RS - Supplements',
        About:"Available in 6 flavors ",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-info",
        badge_text:"new",
        id:"myFunction_2",
        Link: 'product-single_2.html',
    },
    {
        id: 3,
        name: 'RS - Karbolyn',
        image: '3_1.png',
        price: 149,
        Discount: '200',
        type: 'RS - Supplements',
        About:"Only 6 left in stock",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-info",
        badge_text:"new",
        id:"myFunction_3",
        Link: 'product-single_3.html',
        
    },
    {
        id: 4,
        name: 'L-CARNITINE ',
        image: '4_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Only 6 left in stock",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-info",
        badge_text:"new",
        id:"myFunction_4",
        Link: 'product-single_4.html',
    },
    {
        id: 5,
        name: 'RS - ZINC',
        image: '5_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        id:"myFunction_5",
        Link: 'product-single_5.html',
    },
    {
        id: 6,
        name: 'RS - Magnesium',
        image: '6_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_6.html',
    },
    {
        id: 7,
        name: 'RS - Apple Vinegar',
        image: '7_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_7.html',
    },
    {
        id: 8,
        name: 'RS - B-Complex',
        image: '8_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_8.html',
    },
    {
        id: 9,
        name: 'RS - Lipozen',
        image: '9_1.png',
        price: 349,
        Discount: '420',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_9.html',
    },
    {
        id: 10,
        name: 'RS - Spirulina',
        image: '10_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_10.html',
    },
    {
        id: 11,
        name: 'RS - ZMA Plus',
        image: '11_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_11.html',
    },
    {
        id: 12,
        name: 'RS - Moringa Oleifera',
        image: '12_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_12.html',
    },
    {
        id: 13,
        name: 'RS - Pro Curcum',
        image: '13_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_13.html',
    },
    {
        id: 14,
        name: 'RS - Royal Test',
        image: '14_1.png',
        price: 149,
        Discount: '249',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_14.html',
    },
    {
        id: 15,
        name: 'RS - L-Arginine',
        image: '15_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 90",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_15.html',
    },
    {
        id: 16,
        name: 'RS - CLA 1500',
        image: '16_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 90",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_16.html',
    },
    {
        id: 17,
        name: 'RS - Caffeine',
        image: '17_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Capsules 90",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_17.html',
    },
    {
        id: 18,
        name: '5-HTP',
        image: '18_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        Ratio:"15",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_18.html',
    },
    {
        id: 19,
        name: 'RS - Vitamin c500 ',
        image: '19_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        Ratio:"15",
        description_1:"Capsules 60",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_19.html',
    },
    {
        id: 20,
        name: 'RS - Creatine',
        image: '20_1.png',
        price: 149,
        Discount: '249',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_20.html',
    },
    {
        id: 21,
        name: 'RS - Cocoa',
        image: '21_1.png',
        price: 349,
        Discount: '449',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_21.html',
    },
    {
        id: 22,
        name: 'RS - RDX7',
        image: '22_1.png',
        price: 149,
        Discount: '249',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_22.html',
    },
    {
        id: 23,
        name: 'RS - BCAA',
        image: '23_1.png',
        price: 99,
        Discount: '149',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_23.html',
    },
    {
        id: 24,
        name: 'RS - Maca powder',
        image: '24_1.png',
        price: 99,
        Discount: '149',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_24.html',
    },
    {
        id: 25,
        name: 'RS - R1',
        image: '25_1.png',
        price: 349,
        Discount: '449',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_25.html',
    },
    {
        id: 26,
        name: 'RS - EAAMINO',
        image: '26_1.png',
        price: 149,
        Discount: '249',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_26.html',
    },
        {
        id: 27,
        name: 'RS L-Carnitine 1350',
        image: '30_1.png',
        price: 99,
        Discount: '120',
        type: 'RS - Supplements',
        About:"Two weeks to delivery",
        description_1:"Price",
        description_2:"quality",
        description_3:"health",
        rating:10,
        Ratio:"15",
        badge:"bg-success",
        badge_text:"Top",
        Link: 'product-single_27.html',
    },
    // ... (other products)
];

let cartItems  = [];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('product-list');
        newDiv.classList.add('product-item');
        newDiv.innerHTML = `
            <!-- Product Card -->
            <div class="col-sm-6 col-md-4 col-lg-3 px-2 mb-4" id="mhmodmaamri">
                <div class="card card-product h-100">
                    <!-- Badges -->
                    <div class="product-badges">
                        <span class="badge bg-danger">${value.Ratio}%</span>
                        <span class="badge ${value.badge}">${value.badge_text}</span>
                    </div>
                    <!-- Badges -->
                    <!-- Buttons -->
                    <div class="product-buttons">
                        <button class="btn-product btn-wishlist" type="button" data-bs-toggle="button" title="Add to wishlist"><i class="ri-heart-line"></i></button>
                        <a class="btn-product btn-compare" href="#" title="Compare product">
                            <i class="ri-repeat-line"></i>
                        </a>
                        <a class="btn-product btn-view" href="#modal-quick-view" data-bs-toggle="modal" title="Quick preview">
                            <i class="ri-eye-line"></i>
                        </a>
                    </div>
                    <!-- Buttons -->
                    <!-- Preview Image -->
                    <a class="card-img-top d-block overflow-hidden flex-shrink-0" href="${value.Link}">
                        <img class="img-fluid" src="assets/img/product-card/${value.image}" alt="Product"">
                    </a>
                    <!-- Preview Image -->
                    <div class="card-body d-flex flex-column align-items-start flex-grow-1 rounded-bottom h-100 py-3">
                        <!-- Product Category -->
                        <a class="product-category d-block fs-sm pb-1" href="#">${value.type}</a>
                        <!-- Product Category -->
                        <!-- Product Title -->
                        <h3 class="product-title flex-grow-1">
                            <a href="#" class="product-title">${value.name}</a>
                        </h3>
                        <!-- Product Title -->
                        <!-- Star Rating -->
                        <span class="star-rating ${value.rating}"></span>
                        <!-- Star Rating -->
                        <!-- Product Price -->
                        <div class="product-price">
                            <span class="text-danger fs-5 product-price">₪${value.price.toLocaleString()}<del class="text-body-secondary ms-1"><small>₪${value.Discount}</small></del>
                            </span>
                        </div>
                        <!-- Product Price -->
                        <!-- Product Meta -->
                        <span class="product-meta text-body-secondary fs-xs">${value.About}</span>
                        <!-- Product Meta -->
                    </div>
                    <!-- Product Addon -->
                    <div class="card-body product-addon">
                        <!-- Button -->
                        <button onclick="addToCart(${key})" class="btn btn-primary btn-sm d-flex align-items-center justify-content-center w-100" type="button"><i class="ri-shopping-cart-2-line me-2"></i>Add to Cart</button>
                        <!-- Button -->
                        <hr class="my-4 d-none d-lg-block">
                        <!-- Product Details -->
                        <div class="product-details d-none d-lg-block fs-sm">
                            <ul class="m-0 ps-4">
                                <li>${value.description_1}</li>
                                <li>${value.description_2}</li>
                                <li>${value.description_3}</li>
                            </ul>
                        </div>

            `;
        productList.appendChild(newDiv);
    })
}
initApp();

// let list = [
//     {
//         id: 1,
//         name: 'RS iso zero protein 33g 1.8kg',
//         pic1: 'big-01.png',
//         pic2: 'big-02.png',
//         pic3: 'big-03.png',
//         pic4: 'big-04.png',
        
//     },
// ]


// function initApp1(){
//     list.forEach((value, key) =>{
//         let newDiv1 = document.createElement('product-list1');
//         newDiv1.classList.add('product-item');
//         newDiv1.innerHTML = `
//         <div class="container" id="product_1_show" style="display: none;">
//         <div class="shadow-lg border rounded-3 p-10 pb-8 mb-10" style="background: white;">
//             <div class="row g-5 g-lg-10">
//                 <!-- Product gallery -->
//                 <div class="col-lg-7">
//                     <!-- Product Gallery Slider -->
//                     <div class="swiper-gallery">
//                         <div class="swiper swiper-gallery-body product-gallery" style="height: 200px;">
//                             <div class="swiper-wrapper">
//                                 <div class="swiper-slide">
//                                     <div class="swiper-gallery-image">
//                                         <img alt="image" src="assets/img/product-gallery/` + value.pic1 + `">
//                                     </div>
//                                 </div>
//                                 <div class="swiper-slide">
//                                     <div class="swiper-gallery-image">
//                                         <img alt="image" src="assets/img/product-gallery/` + value.pic2 + `">
//                                     </div>
//                                 </div>
//                                 <div class="swiper-slide">
//                                     <div class="swiper-gallery-image">
//                                         <img alt="image" src="assets/img/product-gallery/${value.pic3}">
//                                     </div>
//                                 </div>
//                                 <div class="swiper-slide">
//                                     <div class="swiper-gallery-image">
//                                         <img alt="image" src="assets/img/product-gallery/${value.pic4}">
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="swiper swiper-gallery-body product-gallery-thumbs">
//                             <div class="swiper-wrapper">
//                                 <div class="swiper-slide">
//                                     <div class="swiper-gallery-thumb-image">
//                                         <img alt="image" src="assets/img/product-gallery/${value.pic1}">
//                                     </div>
//                                 </div>
//                                 <div class="swiper-slide">
//                                     <div class="swiper-gallery-thumb-image">
//                                         <img alt="image" src="assets/img/product-gallery/${value.pic2}">
//                                     </div>
//                                 </div>
//                                 <div class="swiper-slide">
//                                     <div class="swiper-gallery-thumb-image">
//                                         <img alt="image" src="assets/img/product-gallery/${value.pic3}">
//                                     </div>
//                                 </div>
//                                 <div class="swiper-slide">
//                                     <div class="swiper-gallery-thumb-image">
//                                         <img alt="image" src="assets/img/product-gallery/${value.pic4}">
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <!-- Product Gallery Slider -->
//                 </div>
//                 <!-- Product gallery -->
//                 <!-- Product details -->
//                 <div class="col-lg-5">
//                     <div class="product-details">
//                         <h5 class="product-title fs-4">
//                             <a href="#">Apple Watch 7 Aluminum 45 mm</a>
//                         </h5>
//                         <div class="d-flex align-items-center border-bottom pb-2 mb-2">
//                             <span class="star-rating star-8 fs-6 align-middle"></span>
//                             <span class="d-inline-block fs-sm ms-2">4.7 by 35 Reviews</span>
//                         </div>
//                         <!-- Product Price -->
//                         <div class="product-price mb-3">
//                             <div class="row g-2">
//                                 <div class="col-auto d-flex flex-column justify-content-center">
//                                     <span class="text-accent fs-2">$349</span>
//                                 </div>
//                                 <div class="col d-flex flex-column justify-content-center">
//                                     <del class="text-body-secondary"><span class="fs-sm">$499</span></del>
//                                     <span class="text-danger fs-sm mt-n1">You save 30% (150$)</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <!-- Product Price -->
//                         <!-- Color Picker -->
//                         <h5 class="h6 mb-2">Color</h5>
//                         <div class="mb-3">
//                             <div class="form-check form-option form-check-inline">
//                                 <input class="form-check-input" type="radio" name="radioColor" id="color10" checked>
//                                 <label class="form-option-label rounded-circle" for="color10">
//                                     <span class="form-option-color rounded-circle" style="background-color: var(--bs-info-border-subtle);"></span>
//                                 </label>
//                             </div>
//                             <div class="form-check form-option form-check-inline">
//                                 <input class="form-check-input" type="radio" name="radioColor" id="color20">
//                                 <label class="form-option-label rounded-circle" for="color20">
//                                     <span class="form-option-color rounded-circle" style="background-color: var(--bs-primary-border-subtle);"></span>
//                                 </label>
//                             </div>
//                             <div class="form-check form-option form-check-inline">
//                                 <input class="form-check-input" type="radio" name="radioColor" id="color30">
//                                 <label class="form-option-label rounded-circle" for="color30">
//                                     <span class="form-option-color rounded-circle" style="background-color: var(--bs-danger-border-subtle);"></span>
//                                 </label>
//                             </div>
//                         </div>
//                         <!-- Color Picker -->
//                         <div class="d-flex align-items-center">
//                             <!-- Quantity Products -->
//                             <div class="quantity-products me-3">
//                                 <button class="quantity-btn-minus"><i class="ri-subtract-line"></i></button>
//                                 <input id="quantityNumberID" class="quantity-number" type="number" value="1">
//                                 <button class="quantity-btn-plus"><i class="ri-add-line"></i></button>
//                             </div>
//                             <!-- Quantity Products -->
//                             <!-- Button -->
//                             <button class="btn btn-primary d-flex align-items-center justify-content-center w-100" type="button">
//                                 <i class="ri-shopping-cart-2-line"></i>
//                                 <span class="d-none d-sm-inline ms-2" onclick="hide()">Add to Cart</span>
//                             </button>
//                             <!-- Button -->
//                         </div>
//                         <!-- Buttons -->
//                         <div class="d-flex pt-2 mb-4">
//                             <div class="w-50 me-3">
//                                 <button class="btn btn-secondary d-block w-100" type="button">
//                                     <span class="d-none d-sm-inline">Add to </span> Wishlist </button>
//                             </div>
//                             <div class="w-50">
//                                 <button class="btn btn-secondary d-block w-100" type="button"> Compare </button>
//                             </div>
//                         </div>
//                         <!-- Buttons -->
//                         <!-- Info List -->
//                         <h5 class="h6 mb-3 py-2 border-bottom"><i class="ri-information-line text-body-secondary fs-lg align-middle me-2"></i>Short description</h5>
//                         <p>dsadas</p>
//                         <!-- Info List -->
//                     </div>
//                 </div>
//                 <!-- Product details -->
//             </div>
//         </div>
//     </div>

//             `;
//         productList.appendChild(newDiv1);
//     })
// }
// initApp1();






function addToCart(key){
    if(cartItems[key] == null){
        cartItems[key] = JSON.parse(JSON.stringify(products[key]));
        cartItems[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart(){
    cartList.innerHTML = '';
    let count = 0;
    let total = 0;
    let icon = "₪";

    cartItems.forEach((value, key)=>{
        total += value.price;
        count += value.quantity;

        if(value != null){
            let newLi = document.createElement('li');
            newLi.innerHTML = `
                <div><img src="assets/img/product-card/${value.image}"/></div>
                <div>${value.name}</div>
                <div>₪${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            cartList.appendChild(newLi);
        }
    })

    totalPrice.innerText = total += ("₪").toLocaleString();
    cartQuantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete cartItems[key];
    }else{
        cartItems[key].quantity = quantity;
        cartItems[key].price = quantity * products[key].price;
    }
    reloadCart();
}


function myFunction_1() {
    var x = document.getElementById("product_1_show");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function hide(){
    var x = document.getElementById("product_1_show");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



var image_1 = document.getElementById("WolfTeam_1_1");
var image_2 = document.getElementById("WolfTeam_2_1");
var image_3 = document.getElementById("WolfTeam_3_1");
var image_4 = document.getElementById("WolfTeam_4_1");

var image_5 = document.getElementById("WolfTeam_5_1");
var image_6 = document.getElementById("WolfTeam_6_1");
var image_7 = document.getElementById("WolfTeam_7_1");
var image_8 = document.getElementById("WolfTeam_8_1");

image_1.src = "assets/img/product-gallery/big-05.png";
