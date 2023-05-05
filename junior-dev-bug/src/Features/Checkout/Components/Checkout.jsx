import React from 'react'
import { useForm } from 'react-hook-form';
import { useGlobalCtx } from '../../../Contexts/GlobalProvider';
import Contact from './Contact'
import Order from './Order'

function Checkout() {
    const { register, handleSubmit } = useForm();
    const { getPayment } = useGlobalCtx();
    const onsubmit = (data) =>{
         getPayment(data)
        };
    return (
        <form onSubmit={handleSubmit(onsubmit())}>
            <div className="grid grid-cols-12 gap-x-8 py-12">
                <div className="col-span-7 ">
                    <Contact register={register} />
                </div>
                <div className="col-span-5 ">
                    <Order />
                </div>
            </div>
        </form>
    )
}

export default Checkout;
