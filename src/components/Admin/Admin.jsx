import axios from 'axios';
import { useState, useEffect } from 'react';
import AdminList from './AdminList';
import Header from '../Header/Header';
import { Container, Box, Button, TextField} from "@mui/material";


function Admin () {
    let [allRatings, setAllRatings] = useState([])
    
    useEffect(() => {
        getRatings();
    },[])

    const getRatings = () => {
        axios({
            method: 'GET',
            url: ('/api/feedback')
        })
        .then((response)=> {
            setAllRatings(response.data) 
        })
        .catch((error) => {
            console.log('error getting list of feedback',error)
        })
    }

    return(
        <div>
            <Container sx={{alignItems:'center'}}>
            <Box  sx={{margin:2, alignContent:'center', border:1, height:120}}>
                <Header />
            </Box>

            <Box sx={{margin:2, alignItems:'center', border:1}}>
                <table>
                    <thead>
                        <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {allRatings.map((feedback) =>{
                            return (
                                <AdminList 
                                    key={feedback.id} 
                                    feedback={feedback} 
                                    getRatings={getRatings} /> 
                            )})}
                    </tbody>
                </table>
            </Box>
            </Container>
        </div>
            )
}

export default Admin;