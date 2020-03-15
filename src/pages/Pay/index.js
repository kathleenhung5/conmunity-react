import React,{useContext,useEffect,useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import {Link} from "react-router-dom";
import {FiCheckCircle} from 'react-icons/fi';
import { Contxt } from '../../App';

const stripePromise = loadStripe('pk_test_33cyFX5JhyAdytACyYPI6cx00020aRNCHz');

function Pay(){
  const ctx = useContext(Contxt);
  const [paid,setPaid] = useState(false);
    useEffect(()=>{
        setPaid(localStorage.getItem('paid'));
    },[]);
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
                setPaid(true);
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
      <div>
        <div className={paid?"confirm-cont":"dis-none"}>
          <div className="confirm-box">
            <h2>Success!</h2>
              <FiCheckCircle />
              <p>You have upgraded to the Premium version</p>
              <Link 
              to="/template" 
              onClick={()=>{ctx.dispatch({type:'Template'})}}>
              Go back to project</Link>
          </div>
        </div>
        <Elements stripe={stripePromise}>
            <CardForm />
        </Elements>
      </div>
    )
}

export default Pay;