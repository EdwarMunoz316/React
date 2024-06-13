import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

    // El useCallback es lo mismo que el useMemo pero esta pensado para cuando queremos pasar una funcion al useMemo y si es solo un valor osea sin funcion es useMemo

    const getMovies = useCallback(async ({ search }) => {
      if (search === previousSearch.current) return

      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        // Se ejecuta tanto en el Try como en el Catch
        setLoading(false)
      }
    }, [])

    const sortedMovies = useMemo(() => {
      return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    }, [sort, movies])
  
    return { movies: sortedMovies, getMovies, loading }
  }