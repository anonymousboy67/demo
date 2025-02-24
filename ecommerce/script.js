document.addEventListener("DOMContentLoaded", () => {
  const products = [
      { id: 1, name: "Product 1", price: 29.99 },
      { id: 2, name: "Product 2", price: 39.99 },
      { id: 3, name: "Product 3", price: 49.99 }
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
          <span>${product.name} - $${product.price.toFixed(2)}</span>
          <button data-id="${product.id}">Add to cart</button>
      `;
      productList.appendChild(productDiv);
  });

  productList.addEventListener("click",(e)=>{
    if(e.target.tagName=="BUTTON"){
     const productId=(typeof e.target.getAttribute("data-id"))
     const product=products.find(p=>p.id===productID)
     addToCart(product)

    }
  })

  function addToCart(product){
    cart.push(product);
  }

  function renderCart(){
    cartItems.innerHTML="";
    let totalPrice=0;

    if(cart.length>0){
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEact(cartItems, index)=>{
        totalPrice+=cartItems.price;
        const cartItems=document.createElement('div');
        cartItems.innerHTML=
        `${item.name}-$${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItems);
      }
    }else{
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent='0'

    }
  }

  checkOutBtn.addEventListener("click", ()=>{
    cart.length=0;
    alert("Checkout successfully");
    renderCart();
  })



});
