import React from 'react';

const Card = ({ name, email, id }) => {
	//叫做 destructuring 的東東
	return(
		<div className='tc bg-light-green dib br3 a3 ma2 grow bw2 shadow-5'>
	{/*這個語法叫做 tachyons 可以快速有現成樣式*/}
			<div>
			<img alt='robo' src={`https://robohash.org/${id}?200x200`}/>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>

	);
}

export default Card;