import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    // price in cents for stripe
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HifI7BmXz1NGj0RTWwuvzgL2kULqzesj9f3Bncw9JpbipEaNKnvMONncm0SPxv46lPsbvDQtBFjYlUlBjTtnCOF00VEwLCVxu';

    const onToken = token => {
        console.log('token', token);
        alert('Payment Successful');
        axios({
           url: 'payment',
           method: 'post',
           data: {
               amount: priceForStripe,
               token,
           }
        }).then( response => {
            alert('Payment sucessful');
        }).catch( error => {
            console.log('Payment error', JSON.parse(error));
            alert('There was an issue with your payment. Please be sure to use the provided credit card')
        });
    }
    return (
        <StripeCheckout
            label='Pay now'
            name='JAZSoft Solutions'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishablekey
            }
            />
    );
};

export default StripeCheckoutButton;
