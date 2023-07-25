import React, { useEffect } from "react"
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import PageTitle from "../components/UI/pageTitle.styled";
import Drawer from "../components/UI/drawer";

import { TextContainer } from "../components/UI/textContainer";



const Purchase = () => {


  useEffect(() => {
    if(typeof window !== 'undefined'){{  
    
    //   // (window as any).Paddle!.Environment.set('sandbox');
    //   const vendorId = process.env.NEXT_PUBLIC_VENDORID || '1';
    //   window.Paddle.Setup({ vendor: +vendorId});
    //   window.Paddle.Checkout.open({ product: 842496});
    }}
  }, [])
 
  


    return (
        <Providers>
            <Drawer />
        <PageTitle postTitle>Purchase</PageTitle>
        <TextContainer>
            Test
        </TextContainer>
        
        </Providers>
    )
}

export default Purchase;