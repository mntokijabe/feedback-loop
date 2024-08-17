import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Feeling () {
    const [feelingRating, setFeelingRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = () => {
        dispatch ({
            type: "FEELING_RANK",
            payload: feelingRating
        })
        history.push('/understand')
    }
    return (
        <div>
            <h2>How are you feeling today?</h2>

            <label>Feeling?</label>
            <input 
                data-testid="input"
                type="number"
                placeholder="(1-low, 5-high)"
                onChange={(e) => setFeelingRating(e.target.value)}
                value={feelingRating} />
            <button data-testid="next" onClick={storeRank}>Next</button>

        </div>
    )
}

export default Feeling;