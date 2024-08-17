import { useDispatch } from "react-redux";
import { useState } from "react";


function Comments () {
    const [feelingRating, setFeelingRating] = useState('');
    const dispatch = useDispatch();

    const storeRank = () => {
        dispatch ({
            type: "ADD_RANKING",
            payload: {
                feelingRank: feelingRating
            }
        })
    }
    return (
        <div>
            <h2>How are you feeling today?</h2>

            <label>Feeling?</label>
            <input 
                data-testid="input"
                type="number"
                placeholder=""
                value={feelingRating} />
            <button data-testid="next" onClick={storeRank}>Next</button>

        </div>
    )
}

export default Comments;