import { Spinner } from 'keep-react'
import React from 'react'

const GlobalLoader = () => {
    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 flex justify-center items-center w-full">
            <Spinner />
        </div>
    )
}

export default GlobalLoader




