import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    const getRandomFact = () => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }

    useEffect(getRandomFact, [])

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

    const handleClick = () => {
        getRandomFact()
    }

    return (
        <main>
            <h1>App de gatos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {/* <section> */}
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
            {/* </section> */}
        </main>
    )
}