import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_33cyFX5JhyAdytACyYPI6cx00020aRNCHz');

function Pay(){

    // Form 
    const CardForm = () => {
        const stripe = useStripe();
        const elements = useElements();
        const handleSubmit = async (event) => {
            event.preventDefault();        
            const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
              });
              if (error) {
                console.log('[error]', error);
              } else {
                console.log('[PaymentMethod]', paymentMethod);
                localStorage.setItem('paid',true);
              }       
        };

        return (
            <form className="pay-form" onSubmit={handleSubmit}>
                <h3>Card Information</h3>
               <CardElement />
               <button type="submit" disabled={!stripe}>Pay</button>
            </form>
      )
    }

    return(
        <Elements stripe={stripePromise}>
            <CardForm />
        </Elements>
    )
}

export default Pay;