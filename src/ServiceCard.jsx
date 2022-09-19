import { useState } from 'react';
import ContenedorColumnas from './components/ContenedorColumnas';

function App() {

  const [listaItems, setListaItems] = useState([])

  const agregarItem = (tituloItem) => {

      const nuevoItem = {
        id: 1,
        titulo: tituloItem,
      }

      setListaItems([nuevoItem, ...listaItems])
      console.log(listaItems)
  }

  return (
    <>
      <div className='container mt-5 p-5'>
        <div className='mt-5 p-5 d-inline-block d-flex justify-content-center align-items-center'>
          <ContenedorColumnas agregarItem={agregarItem}/>
        </div>
      </div>
    </>
  );
}

export default App;