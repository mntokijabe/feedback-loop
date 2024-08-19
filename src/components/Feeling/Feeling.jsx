import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Box, Button, TextField} from "@mui/material";
import Header1 from "../Header/Header1";
import Header from "../Header/Header";

function Feeling () {
    const [feelingRating, setFeelingRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = (event) => {
        event.preventDefault();
        console.log(feelingRating)
        if(Number(feelingRating) > 5 || Number(feelingRating)<1) {
            alert('Use a number between 1 and 5')
        }
        else {dispatch ({
                type: "FEELING_RANK",
                payload: feelingRating
            })
            history.push('/understand')
        }
    }
    return (
        <div>
            <Box >
                <Header1 />
            </Box>
            <Box sx={{border:1, marginTop:-2.5}}>
                <h2>How are you feeling today?</h2> 
                <Box  sx={{
                    display:'flex', 
                    flexDirection:'row', 
                    gap:20,
                    height:100, 
                    alignItems:'center', 
                    justifyContent:'center'}}>
                    <form id="a-form" className="comment" onSubmit={storeRank}>
                        <label>Feeling?</label>
                        <input required
                            data-testid="input"
                            type="number"
                            placeholder="(1-low, 5-high)"
                            onChange={(e) => setFeelingRating(e.target.value)}
                            value={feelingRating} />
                    </form>
                    <Button variant="contained" color="secondary" type="submit" form="a-form" data-testid="next">Next</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Feeling;