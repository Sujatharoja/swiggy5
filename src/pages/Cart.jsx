import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";


function Cart() {
    const cartItems = useSelector((state) => {
        return state.cart.items
    });

    const totalMoney = cartItems.reduce((prev, curr) => {
        return prev + (curr.defaultPrice / 100)
    }, 0)

function handlePayment(){

  // if (window.Razorpay) {
  //   resolve();
  //   return;
  // }
      const options = {
        key: `rzp_test_R7cqx84I8gEoWP`, // Replace with your actual Razorpay Key ID
        amount: totalMoney*100, // Amount in paise
        handler: (response) => {
          // Callback function when payment is successful
          alert("Payment Successful!");
          console.log("Payment Response:", response);
          navigate('/payment-success')
          // You can call your backend here to verify the payment
        },
        prefill: {
          name: "Dharani", // Customer name
          email: "dharani@example.com", // Customer email
          contact: "9550888709", // Customer phone number
        },
        theme: {
          color: "#3399cc", // Theme color for the payment modal
        },
      };

      // Initialize and open the Razorpay payment modal
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    }


    return (
        <div>
            {
                cartItems.map((x) => {
                    return <div className="cart-items">
                        <h1>{x.name}</h1>
                        <h1>{x.defaultPrice / 100}</h1>

                    </div>
                })
            }
            <center>
                <button onClick={handlePayment} className="pay-btn">PAY NOW {totalMoney}</button>
            </center>

        </div>
    )
}

export default Cart