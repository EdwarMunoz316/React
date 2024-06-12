import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'


function App() {
  const { movies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    
    // JavaScript Forma no Controlada
    // const { search } = Object.fromEntries(
    //   new window.FormData(event.target)
    // )

    console.log({ search })
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={(e) => setSearch(e.target.value)} value={search} name='search' placeholder='Avengers, Star Wars, The Matrix ...' />
          <button type='submit' >Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
