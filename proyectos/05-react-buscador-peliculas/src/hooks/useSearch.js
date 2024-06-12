import { useEffect, useState } from 'react'

export function useSearch () {
    const [ search, setSearch ] = useState('')
    const [ error, setError ] = useState(null)

    useEffect(() => {
        if (search === '') {
        setError('No se puede buscar una pelicula vacia')
        return
        }

        if (search.match(/^\d+$/)) {
        setError('No se puede buscar una pelicula con un numero')
        return
        }

        if (search.length < 3) {
        setError('La busqueda debe tener al menos 3 caracteres')
        return
        }

        setError(null)
    }, [search])

    return { search, setSearch, error }
}