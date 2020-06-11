import React from 'react'
import moment from 'moment'
import 'moment/locale/es'

import imgNotFound from '../../assets/no-image-found.png'

const Noticia = ({ noticia }) => {
	// Extraer los datos de la noticia
	let { urlToImage, url, title, description, publishedAt, source } = noticia

  if(urlToImage) {
		if (!urlToImage.startsWith('http')) {
      urlToImage = imgNotFound;
		}
  } else {
      urlToImage = imgNotFound;
  }

  moment.locale('es');

	return (
		<div className='card'>
			<img src={urlToImage} alt={title} className='card-img-top' />
			<div className='card-body'>
				<h5>{title}</h5>
				<p>{description}</p>
				<div className='mb-3'>
					<small>{moment.parseZone(publishedAt).format('LLLL')}</small>
				</div>
				<a
					href={url}
					target='_blank'
					rel='noopener noreferrer'
					className='btn btn-outline-success btn-block'
				>
					Ver noticia completa
				</a>
			</div>
			<div className='card-footer'>
				<span className='card-title'>
					<b>Fuente: </b>
					{source.name}
				</span>
			</div>
		</div>
	)
}

export default Noticia
