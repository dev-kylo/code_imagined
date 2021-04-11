import React from 'react';

const withSuspense = (Cmp) => {

    return (props) => {
    
        return (
            <React.Suspense>
                <Cmp { ...props }></Cmp>
            </React.Suspense>
        )
    }

}

export default withSuspense;