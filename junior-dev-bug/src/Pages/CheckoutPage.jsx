import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGlobalCtx } from '../Contexts/GlobalProvider';
import Checkout from '../Features/Checkout/Components/Checkout';

function CheckoutPage() {
    const [searchParams] = useSearchParams();
    const { toggleModal } = useGlobalCtx();

    useEffect(() => {
        if (searchParams.get("buy") === "success") {
            toggleModal();
        }
    }, [])
    return (
        <Checkout />
    )
}

export default CheckoutPage