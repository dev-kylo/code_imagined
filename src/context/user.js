import React, { createContext, useState, useEffect, useMemo } from 'react'
import { getTokenFromURL } from '../utils/getTokenFromUrl'
import isBrowser from '../utils/isBrowser'

// Create the user context
export const UserContext = createContext()

// Create the user provider component
export const UserProvider = ({ children }) => {
    // State variables
    const [userId, setUserId] = useState('')
    const [adSource, setAdSource] = useState('')
    const [adStart, setAdStart] = useState('')

    // Check for userId in search params and local storage
    useEffect(() => {
        if (!isBrowser()) return
        // Check search params
        const searchUserId = getTokenFromURL('ck_subscriber_id', window.location.search)
        if (searchUserId) {
            setUserId(searchUserId)
            localStorage.setItem('ck_subscriber_id', searchUserId)
        } else {
            // Check local storage
            const storedUserId = localStorage.getItem('ck_subscriber_id')
            if (storedUserId) setUserId(storedUserId)
        }
    }, [])

    // Check for source in search params
    useEffect(() => {
        if (!isBrowser()) return
        const searchUserId = getTokenFromURL('source', window.location.search)
        const searchPromStart = getTokenFromURL('start', window.location.search)
        if (searchUserId) setAdSource(searchUserId)
        if (searchPromStart) setAdStart(searchPromStart)
    }, [])

    // Memoize the context value
    const contextValue = useMemo(
        () => ({
            userId,
            adSource,
            adStart,
        }),
        [userId, adSource, adStart]
    )

    // Render the user provider with the context value
    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
