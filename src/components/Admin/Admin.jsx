import axios from 'axios';
import { useState, useEffect } from 'react';


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
            console.log(allRatings)
        })
        .catch((error) => {
            console.log('error getting list of feedback',error)
        })
    }

    const removeFeedback = (id) => {
        console.log(id)
        const feedbackId = Number(id)
        axios({
            method: "DELETE",
            url: ('/api/feedback/$(id)')
        })
        .then(response => {
            getRatings()
        })
        .catch((error) => {
            console.log('error deleting feedback',error)
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
                          const id = (feedback.id)
                        return (
                            <tr>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                        <td><button onClick={removeFeedback(id)}>🗑️</button></td>
                        </tr>
                      )})}

                </tbody>
            </table>
        </div>
    )
}

export default Admin;