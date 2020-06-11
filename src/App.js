import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import ListaNoticias from './components/ListaNoticias/ListaNoticias';

function App() {
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const l = '25e6b65f4adf4efa9bf8e1fa1a06c351';
      const pais = 'co';
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${l}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
    };
    consultarApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo="Noti React"
      />
      <div className="container my-3">
        <Formulario setCategoria={setCategoria} />
        <hr/>
        <ListaNoticias noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
