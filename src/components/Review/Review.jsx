import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function Review () {
    const rankSummary = useSelector(store => store.rankSummary);
    const history = useHistory();
    const feelingRank =  useSelector(store=>store.feelingRank);
    const understandRank =  useSelector(store=>store.understandRank);
    const supportedRank =  useSelector(store=>store.supportedRank);
    const comments =  useSelector(store=>store.comments);

    const ratingSummary = {
        feeling: Number(feelingRank),
        understanding: Number(understandRank),
        support: Number(supportedRank),
        comments: comments
    }

    const storeRank = () => {
        axios({
            method: "POST",
            url: '/api/feedback',
            data: ratingSummary
        })
        .then((response) => {
            history.push('/success')
        })
        .catch((error) => {
            console.log('error with POST /api/feedback',error)
        })
    }
    return (
        <div>
            <h2>Review Your Feedback</h2>
            <p>Feeling: {feelingRank}</p>
            <p>Understanding: {understandRank}</p>
            <p>Supported: {supportedRank}</p>
            <p>Comments: {comments}</p>
            <button data-testid="next" onClick={storeRank}>Submit</button>

        </div>
    )
}

export default Review;