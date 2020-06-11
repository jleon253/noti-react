import React from 'react'
import Noticia from '../Noticia/Noticia'

const ListaNoticias = ({ noticias }) => {
	return (
		<div className='row'>
			<div className="col-12 card-columns">
        {noticias
        				? noticias.map((noticia) => (
        						<Noticia key={noticia.url} noticia={noticia} />
        				  ))
        				: 'No se obtuvieron datos'}
      </div>
		</div>
	)
}

export default ListaNoticias
