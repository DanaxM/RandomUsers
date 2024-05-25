import React from 'react';
import './Card.css';

function Card({ id, name = 'Desconocida', photo, activo, cambiarActivo }) {
	const toggleActivo = () => {
		cambiarActivo(id);
	};

	const className = `card-img-top ${activo ? '' : 'disabled'}`;

	return (
		<article className='card'>
			<picture>
				<img
					onClick={toggleActivo}
					src={id ? photo : 'https://cuv.upc.edu/es/shared/imatges/fotos-professorat-i-professionals/anonimo.jpg'}
					className={className}
					alt=''
				/>
				<h3 className='card-title-user'>{activo ? name : 'Suspendida'}</h3>
			</picture>
		</article>
	);
}

export default Card;
