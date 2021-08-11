import { useEffect, useState } from 'react';
import isBrowser from '../utils/isBrowser';


const useScreenSize = () => {

    const [screenWidth, setScreenWidth] = useState(null);
    const [screenHeight, setScreenHeight] = useState(null);

    useEffect(() => {
        const setScreenSize = () => {
            console.log('Setting screen size')
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth);
        }
        if(isBrowser()){
            setScreenSize();
            window.addEventListener('resize', setScreenSize)
        }
    },[setScreenHeight, setScreenWidth])

    return [screenWidth, screenHeight]
};

export default useScreenSize;