import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Box, Button, TextField} from "@mui/material";
import Header1 from "../Header/Header1";


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
            <Header1 />
            <h2>Review Your Feedback</h2>
            <p>Feeling: {feelingRank}   <Button variant="contained" color="secondary" className="change" sx={{marginLeft:4}}> <Link to='/'>Change</Link></Button></p>
            <p>Understanding: {understandRank}     <Button variant="contained" color="secondary" className="change" sx={{marginLeft:4}}> <Link to='/understand'>Change</Link></Button></p>
            <p>Supported: {supportedRank}    <Button variant="contained" color="secondary" className="change" sx={{marginLeft:4}}> <Link to='/supported'>Change</Link></Button></p>
            <p>Comments: {comments}     <Button variant="contained" color="secondary" className="change" sx={{marginLeft:4}}> <Link to='/comments'>Change</Link></Button></p>
            <Button variant="contained" color="secondary" data-testid="next" onClick={storeRank}>Submit</Button>
        </div>
    )
}

export default Review;