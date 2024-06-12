import { useEffect, useState } from "react"

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

    useEffect(() => {
        if (!fact) return

        // const thereeFirstWord = fact.split(' ').slice(0, 3).join(' ')
        const thereeFirstWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${thereeFirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                setImageUrl(`/cat/${_id}/says/${thereeFirstWord}`)
            })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}