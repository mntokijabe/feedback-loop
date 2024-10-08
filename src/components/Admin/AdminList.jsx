import axios from "axios"

function AdminList ({feedback, getRatings}) {

    
    const removeFeedback = () => {
        let feedbackToRemove = feedback.id
        axios({
            method: "DELETE",
            url: (`/api/feedback/${feedbackToRemove}`)
        })
        .then(response => {
            getRatings()
        })
        .catch((error) => {
            console.log('error deleting feedback',error)
        })
    }
    return(
        <tr>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <td><button onClick={removeFeedback}>🗑️</button></td>
        </tr>                  
    )
}
export default AdminList;