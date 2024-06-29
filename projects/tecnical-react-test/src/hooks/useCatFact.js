import { useState, useEffect } from 'react'
import { getRandomFact } from '../service/fact'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  /// Retrieve the event when the page is loaded.
  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
