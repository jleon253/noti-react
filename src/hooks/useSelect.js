import React, { useState } from 'react'

const useSelect = (stateInicial, opciones) => {
	// Creando state de custom hook
	const [stateSelect, setStateSelect] = useState(stateInicial)
	const SelectElement = () => (
		<div className='form-group'>
			<label>
				<b>Encuentra noticias por categoría:</b>
			</label>
			<select
				value={stateSelect}
				className='form-control'
				onChange={(e) => setStateSelect(e.target.value)}
			>
				{opciones.map((opcion) => (
					<option key={opcion.value} value={opcion.value}>
						{opcion.label}
					</option>
				))}
			</select>
		</div>
	)
	return [stateSelect, SelectElement]
}

export default useSelect
