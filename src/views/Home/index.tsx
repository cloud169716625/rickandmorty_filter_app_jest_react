import React, { useEffect, useState } from 'react';
import { Pagination, TextField, InputLabel, MenuItem, FormControl  } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// Component
import Card from './Card'
// Rest API
import { getAllCharacter } from '../../hooks';
// CSS
import "./HomeStyles.css";
 
 

export default function Home() {
	const [characters, setCharacters] = useState<any>([])
	const [curPageNum, setCurPageNum] = useState(1)
	const [name, setName] = useState<string>('');
	const [species, setSpecies] = useState<string>('');
	const [type, setType] = useState<string>('');
	const [gender, setGender] = useState<string>('');
	const [status, setStatue] = useState<string>('');
	const [openGender, setOpenGender] = useState(false);
	const [openStatus, setOpenStatus] = useState(false);

	const handleChangeName = (event: any) => {
		setName(event.target.value)
	}

	const handleChangeSpecies = (event: any) => {
		setSpecies(event.target.value)
	}

	const handleChangeType = (event: any) => {
		setType(event.target.value)
	}

	const handleChangeGender = (event: SelectChangeEvent<typeof gender>) => {
		setGender(event.target.value);
	};  

	const handleChangeStatus = (event: SelectChangeEvent<typeof status>) => {
		setStatue(event.target.value);
	};  

	const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
		setCurPageNum(page)
	}

	useEffect(() => {
		const filterData = {
			curPageNum: curPageNum,
			name: name,
			species: species,
			type: type,
			gender: gender,
			status: status, 
		}
		getAllCharacter(filterData).then((res:any) => {
			setCharacters(res)
		})
	}, [curPageNum, name, species, type, gender, status]) 

	return (
		<div className='root'>
			<div className='container'>
				<div className='filterContainer'>
					<TextField label="Name" variant="outlined" onChange={handleChangeName} value={name} />
					<TextField label="Species" variant="outlined" onChange={handleChangeSpecies} value={species} />
					<TextField label="Type" variant="outlined" onChange={handleChangeType} value={type} />
					<FormControl sx={{ m: 1, minWidth: 120 }}>
						<InputLabel id="demo-controlled-open-select-label">Gender</InputLabel>
						<Select  
							open={openGender}
							onClose={() => setOpenGender(false)}
							onOpen={() => setOpenGender(true)}
							value={gender}
							label="Gender"
							onChange={handleChangeGender}
						>
							<MenuItem value="">
								<em>Unknown</em>
							</MenuItem>
							<MenuItem value='female'>Female</MenuItem>
							<MenuItem value='male'>Male</MenuItem>
							<MenuItem value='genderless'>Genderless</MenuItem>
						</Select>
					</FormControl>
					<FormControl sx={{ m: 1, minWidth: 120 }}>
						<InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
						<Select  
							open={openStatus}
							onClose={() => setOpenStatus(false)}
							onOpen={() => setOpenStatus(true)}
							value={status}
							label="Status"
							onChange={handleChangeStatus}
						>
							<MenuItem value="">
								<em>Unknown</em>
							</MenuItem>
							<MenuItem value='alive'>Alive</MenuItem>
							<MenuItem value='dead'>Dead</MenuItem>
						</Select>
					</FormControl>
				</div> 
				<div className="subContainer">
					{
						characters?.results?.map((item:any) => (
							<div data-testid="characters" key={item?.id}>
								<Card item={item} />
							</div>	

						))
					}
				</div>
				<div className='paginationContainer'>
					{
						characters?.info?.pages && (
							<Pagination onChange={handleChangePage} count={Number(characters?.info?.pages)} variant="outlined" shape="rounded"  />
						)
					}
				</div>
			</div>
		</div>
	)
}