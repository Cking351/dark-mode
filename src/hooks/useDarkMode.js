import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValues) => {
    const [someValue, setSomeValue] = useLocalStorage('enabled')

    useEffect(() => {
        if(window.localStorage.getItem(value) === 'true') {
            const body = document.getElementById("body")
            body.classList.add('dark-mode')
        }else {
            const body = document.getElementById("body")
            body.classList.remove("dark-mode")
        }
    },[setValue])

    return [value, setValue]
}