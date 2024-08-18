import axios from 'axios';
import { useState, useEffect } from 'react';
import AdminList from './AdminList';


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
        </div>
            )
}

export default Admin;