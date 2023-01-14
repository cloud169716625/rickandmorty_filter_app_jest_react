import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import { Grid, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// Rest API
import { getCharacterById } from '../../hooks';

export default function Detail() {
    let params = useParams();
    let history = useHistory();
    const [characterId, setCharacterId] = React.useState<any>()
    const [characterInfo, setCharacterInfo] = React.useState<any>()

    React.useEffect(() => {
        setCharacterId(params)
    }, [])

    React.useEffect(() => {
        if(characterId?.id) {
            getCharacterById(characterId?.id).then((res:any) => {
                setCharacterInfo(res)
            })
        }
    }, [characterId?.id])  

    const handleBack = () => {
        history.push('/');
    }

    return (
        <div className='root'>
			<div className='container'>
                <Button variant="outlined" onClick={handleBack} startIcon={<ChevronLeftIcon />} style={{marginBottom: 20}}>Back</Button>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6}>
                        <img src={characterInfo?.image} alt="avatar" width="100%" className="image"  />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{display: "grid"}}>
                        <div>
                            <span className='desc'>Name: </span>
                            <span className='name'>{characterInfo?.name}</span>
                        </div>
                        <div>
                            <span className='desc'>Status: </span>
                            <span className='name'>{characterInfo?.status}</span>
                        </div>
                        <div>
                            <span className='desc'>Species: </span>
                            <span className='name'>{characterInfo?.species}</span>
                        </div>
                        <div>
                            <span className='desc'>Gender: </span>
                            <span className='name'>{characterInfo?.gender}</span>
                        </div>
                        <div>
                            <span className='desc'>Origin: </span>
                            <span className='name'>{characterInfo?.origin?.name}</span>
                        </div>
                        <div>
                            <span className='desc'>Last known location: </span>
                            <span className='name'>{characterInfo?.location?.name}</span>
                        </div>
                        <div>
                            <span className='desc'>Number of episodes appearances: </span>
                            <span className='name'>{characterInfo?.episode?.length}</span>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}