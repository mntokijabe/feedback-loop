import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../Header/Header";
import { Container, Box, Button, TextField} from "@mui/material";



function Success () {
    const [feelingRating, setFeelingRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = () => {
        dispatch ({
            type: "CLEAR_ALL",
            payload: ('')
        })
    history.push('/')
    }
    return (
        <div>
            <Box  sx={{margin:2, alignContent:'center', border:1, height:120}}>
                <Header />
            </Box>            
            <Box sx={{margin:2, alignItems:'center', border:1, height:200}}>
            <h2>THANK YOU!</h2>
            <Button variant="contained" data-testid="next" 
              sx={{bgcolor:"blue"}} className="newFeedback" onClick={storeRank}>Leave New Feedback</Button>
            </Box>
        </div>
    )
}

export default Success;