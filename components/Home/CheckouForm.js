
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation';
import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CheckouForm({amount}) {
    const stripe=useStripe();
    const elements=useElements();
    const router = useRouter();



    const handleSubmit=async(event)=>{
        event.preventDefault();

        if(elements==null){
            return ;
        }
        const {error:submitError} = await elements.submit();
        if(submitError){
            return ;
        }

        const res = await fetch('/api/create-intent', {
            method:'POST',
            body: JSON.stringify({
                amount:amount
            })
        });
        const secretKey = await res.json();
        console.log(secretKey);

        const {error}=await stripe.confirmPayment({
            
            
          clientSecret:secretKey,
          elements,
          confirmParams:{
            return_url: 'http://localhost:3000/confirm',
            // return_url: "http://localhost:3000/"
          }
          
        });
        // if (!error) { // Redirect to success page upon successful payment
        //     router.push('/success');
        // }
     
    }

  return (
    <div className='flex flex-col justify-center items-center w-full mt-6'>
        <h2 className='m-5 font-bold'>Amount to pay: {amount}</h2>
      <form className='mx-w-md' onSubmit={handleSubmit}>

        <PaymentElement/>
        <button className='w-full bg-black text-white p-2 rounded-lg mt-2'>Pay</button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default CheckouForm
