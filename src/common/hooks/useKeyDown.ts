import { useEffect } from 'react'

/**
 * Add keydown event listener for document
 *
 * @param callback - function that calls when the specified key pressed
 * @param key - key KeyboardEvent property
 */
export const useKeyDown = (callback: Function, key: string, dependencies?: any[]) => {
  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback()
      }
    }

    document.addEventListener('keydown', keydownHandler)

    return () => {
      document.removeEventListener('keydown', keydownHandler)
    }
  }, dependencies)
}
