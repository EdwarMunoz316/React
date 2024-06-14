import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {/* <h4>Prueba tecnica de React ⚛️ - <span> @EdwarMunoz316</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}