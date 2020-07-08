import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage('enabled')

    useEffect(() => {
        if (darkMode === true) {
            return document.querySelector('body').classList.add('dark-mode')
        } else {
            return document.querySelector('body').classList.remove('dark-mode');
        }
    },[setDarkMode])

    return [darkMode, setDarkMode]
}