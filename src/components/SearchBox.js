import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className = 'pa2'>
			<input 
			className = 'pa3 ba b--green bg-lightest-blue'
			type = 'search' 
			placeholder = 'search robots'
			onChange = {searchChange} 
			// onChange 本身就是個 html 物件，把他作為一個 property
			// 又因在父層<App />賦予他function功能，所以只要有輸入資料就能執行 function
			/>
		</div>	
	);
}

export default SearchBox;