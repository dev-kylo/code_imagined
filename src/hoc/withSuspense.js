/* eslint-disable react/display-name */
import React from 'react'

const withSuspense = Cmp => {
    return props => {
        return (
            <React.Suspense>
                <Cmp {...props} />
            </React.Suspense>
        )
    }
}

export default withSuspense
