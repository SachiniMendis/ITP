function Cart(){


    return(

        <>


    <div class="container cart">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src="./images/product-2.jpg" alt="" />
              <div>
                <p>Boy’s T-Shirt</p>
                <span>Price: $50.00</span> <br />
                <a href="#">remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" min="1" /></td>
          <td>$50.00</td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src="./images/product-3.jpg" alt="" />
              <div>
                <p>Boy’s T-Shirt</p>
                <span>Price: $90.00</span> <br />
                <a href="#">remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" min="1" /></td>
          <td>$90.00</td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src="./images/product-4.jpg" alt="" />
              <div>
                <p>Boy’s T-Shirt</p>
                <span>Price: $60.00</span> <br />
                <a href="#">remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" min="1" /></td>
          <td>$60.00</td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src="./images/product-5.jpg" alt="" />
              <div>
                <p>Boy’s T-Shirt</p>
                <span>Price: $60.00</span> <br />
                <a href="#">remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" min="1" /></td>
          <td>$60.00</td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src="./images/product-6.jpg" alt="" />
              <div>
                <p>Boy’s T-Shirt</p>
                <span>Price: $60.00</span> <br />
                <a href="#">remove</a>
              </div>
            </div>
          </td>
          <td><input type="number" value="1" min="1" /></td>
          <td>$60.00</td>
        </tr>
      </table>
      <div class="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$250</td>
          </tr>
        </table>
        <a href="#" class="checkout btn">Proceed To Checkout</a>
      </div>
    </div>

    <section class="section featured">
      <div class="top container">
        <h1>Latest Products</h1>
        <a href="#" class="view-more">View more</a>
      </div>
      <div class="product-center container">
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-6.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <a href="">Concepts Solid Pink Men’s Polo</a>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-1.jpg" alt="" />
            </a>
            <span class="discount">40%</span>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <a href="">Concepts Solid Pink Men’s Polo</a>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-3.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <a href="">Concepts Solid Pink Men’s Polo</a>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-2.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <a href="">Concepts Solid Pink Men’s Polo</a>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
      </div>
    </section>

   

        </>
    )
}

export default Cart;