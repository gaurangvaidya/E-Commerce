import React from 'react'
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({price}) => {


    const priceForStripe = price*100;
    const publicKey = 'pk_test_51JeJmCSA9NG4BFSFTMjWMXDlzKW5hMEfll34ASMC6cm4GwQEs99HLcAMFaSrYzIQjXasv9i7mgnIZD7wkKk00JCi00w7ZXHNBi';

    const onToken = (token) => {
        console.log(token)
        alert("Payment Success");
    }
    return (
        <StripeCheckout

            label="Pay Now"
            name="Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i.CUz.svg"
            description={`Your Total Price is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publicKey}

        />
    );

}

export default StripeButton;

