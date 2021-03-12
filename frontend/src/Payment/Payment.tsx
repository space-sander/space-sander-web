import React from 'react';

import CheckoutSteps from '../Payment/CheckoutSteps';

function PaymentScreen() {
    const submitHandler = () => {
        alert("Payment Processing...")
    };
    return(
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Payment</h2>
                        </li>

                        <li>
                            <div>
                                <input 
                                    type="radio"
                                    name="paymentMethod"
                                    id="paymentMethod"
                                    value="paypal"
                                ></input>
                                <label htmlFor="payemtnMethod">Paypal</label>
                                <input 
                                    type="radio"
                                    name="paymentMethod"
                                    id="paymentMethod"
                                    value="bitcoin"
                                ></input>
                                <label htmlFor="payemtnMethod">Bitcoin</label>
                            </div>
                        </li>

                        <li>
                            <button type="submit" className="button primary">Continue</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}
export default PaymentScreen;