import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)

  // Retrive the image URL each time we have a new event
  useEffect(() => {
    if (!fact) return
    // const fistWord = fact.split(" ")[0];
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ') // const threeWords = fact.split(' ',3).join(' ');

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`).then((res) => {
      const { url } = res
      setImageUrl(url)
    })
  }, [fact])

  return { imageUrl }
}
