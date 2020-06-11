import React from 'react'

import useSelect from '../../hooks/useSelect'

const Formulario = ({ setCategoria }) => {
	const OPCIONES = [
		{ value: 'general', label: 'General' },
		{ value: 'business', label: 'Negocios' },
		{ value: 'health', label: 'Salud' },
		{ value: 'sports', label: 'Deportes' },
		{ value: 'entertainment', label: 'Entretenimiento' },
		{ value: 'science', label: 'Ciencia' },
		{ value: 'technology', label: 'Tecnología' },
	]

	// Utilizando custom hook
	const [categoria, SelectNoticias] = useSelect('general', OPCIONES)
	// Submit al form y pasar catogira a app.js
	const buscarNoticias = (e) => {
		e.preventDefault()
		setCategoria(categoria)
	}

	return (
		<div className='row mb-4'>
			<form className='col-12 col-lg-6 offset-lg-3' onSubmit={buscarNoticias}>
				<SelectNoticias />
				<button type='submit' className='btn btn-success btn-block'>
					Buscar
				</button>
			</form>
		</div>
	)
}

export default Formulario
