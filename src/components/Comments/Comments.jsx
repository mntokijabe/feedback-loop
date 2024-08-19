import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Box, Button, TextField} from "@mui/material";
import Header1 from "../Header/Header1";


function Comments () {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = () => {
        dispatch ({
            type: "COMMENTS",
            payload: comments
        })
        history.push('/review')
    }
    return (
        <div>
            <Box >
                <Header1 />
            </Box>
            <Box sx={{border:1, marginTop:-2.5}}>
             <h2>Any comments you want to leave?</h2>
             <Box  sx={{
                    display:'flex', 
                    flexDirection:'row', 
                    gap:10,
                    height:100, 
                    alignItems:'center', 
                    justifyContent:'center'}}>
                <div className="comment">
                    <label>Comments</label>
                    <input 
                    data-testid="input"
                    type="text"
                    placeholder="enter comments here"
                    onChange={(e) => setComments(e.target.value)}
                    value={comments} />
                    </div>
                    <Button variant="contained" color="secondary" onClick={storeRank} data-testid="next">Next</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Comments;