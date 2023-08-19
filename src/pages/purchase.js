import React from 'react'
import '../utils/fontawesome'
import Providers from '../providers/Providers'
import { TextContainer } from '../components/layout/containers/textContainer'

const Purchase = () => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (typeof window !== 'undefined' && window.Paddle) {
    //             // window.Paddle.Setup({ vendor: 13136});
    //             // window.Paddle.Environment.set('sandbox');
    //             // Sandbox product 54653

    //             const vendorId = process.env.NEXT_PUBLIC_VENDORID || '1'
    //             window.Paddle.Setup({ vendor: +vendorId })

    //             window.Paddle.Checkout.open({
    //                 method: 'inline', // set to `inline`
    //                 product: 842496, // replace with a product ID or plan ID
    //                 allowQuantity: false,
    //                 disableLogout: true,
    //                 frameTarget: 'checkout-container', // className of your checkout <div>
    //                 frameInitialHeight: 450, // `450` or above
    //                 frameStyle: 'width:100%; min-width:312px; background-color: transparent; border: none;', // `min-width` must be set to `286px` or above with checkout padding off; `312px` with checkout padding on.
    //             })
    //         }
    //     }, 1000)
    // }, [])

    return (
        <Providers>
            <TextContainer>
                <div className="checkout-container" />
            </TextContainer>
        </Providers>
    )
}

export default Purchase
