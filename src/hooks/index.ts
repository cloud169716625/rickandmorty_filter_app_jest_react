import axios from 'axios';

export const getAllCharacter = async (params: any) => {
	try {
		const url = `https://rickandmortyapi.com/api/character/?page=${params.curPageNum}
        ${params.name !== '' ? '&name=' + params.name : ''}
        ${params.species !== '' ? '&species=' + params.species : ''}
        ${params.type !== '' ? '&type=' + params.type : ''}
        ${params.gender !== '' ? '&gender=' + params.gender : ''}
        ${params.status !== '' ? '&status=' + params.status : ''} 
      `;
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		return console.log(error);
	}
};

export const getCharacterById = async (id: any) => {
	try {
		const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
		return response.data;
	} catch (error) {
		return console.log(error);
	}
};
