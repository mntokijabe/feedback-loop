import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Box, Button, TextField} from "@mui/material";
import Header1 from "../Header/Header1";

function Understand () {
    const [understandRating, setUnderstandRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = (event) => {
        event.preventDefault();
        if(understandRating > 5 || understandRating<1) {
            alert('Use a number between 1 and 5')
        }
        else {dispatch ({
                type: "UNDERSTAND_RANK",
                payload: understandRating
            })
            history.push('/supported')
        }
}
    return (
        <div>
            <Box >
                <Header1 />
            </Box>
            <Box sx={{border:1, marginTop:-2.5}}>
                <h2>How well are you understanding the content?</h2>
                <Box  sx={{
                    display:'flex', 
                    flexDirection:'row', 
                    gap:20,
                    height:100, 
                    alignItems:'center', 
                    justifyContent:'center'}}>
                    <form id="a-form" className="comment" onSubmit={storeRank}>
                        <label>Understand?</label>
                        <input required
                            data-testid="input"
                            type="number"
                            placeholder="(1-low, 5-high)"
                            onChange={(e) => setUnderstandRating(e.target.value)}
                            value={understandRating} />
                    </form>
                    <Button variant="contained" color="secondary" type="submit" form="a-form" data-testid="next">Next</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Understand;