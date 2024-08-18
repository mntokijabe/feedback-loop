import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";


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
    const gotoFeeling =() =>{
        history.push('/')
    }
    const gotoUnderstand =() =>{
        history.push('/understand')
    }
    const gotoSupported =() =>{
        history.push('/supported')
    }
    const gotoComments =() =>{
        history.push('/comments')
    }
    return (
        <div>
            <h2>Review Your Feedback</h2>
            <p>Feeling: {feelingRank}   <button className="change"> <Link to='/'>Change</Link></button></p>
            <p>Understanding: {understandRank}     <button className="change"> <Link to='/understand'>Change</Link></button></p>
            <p>Supported: {supportedRank}    <button className="change"> <Link to='/supported'>Change</Link></button></p>
            <p>Comments: {comments}     <button className="change"> <Link to='/comments'>Change</Link></button></p>
            <button data-testid="next" onClick={storeRank}>Submit</button>

        </div>
    )
}

export default Review;