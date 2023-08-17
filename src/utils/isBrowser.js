function isBrowser() {
    console.log('Checking for browser')
    return typeof window !== 'undefined'
}

export default isBrowser
