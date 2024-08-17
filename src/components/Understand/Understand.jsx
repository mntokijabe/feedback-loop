import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Understand () {
    const [understandRating, setUnderstandRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = () => {
        dispatch ({
            type: "UNDERSTAND_RANK",
            payload: understandRating
        })
        history.push('/supported')
    }
    return (
        <div>
            <h2>How well are you understanding the content?</h2>

            <label>Understand?</label>
            <input 
                data-testid="input"
                type="number"
                placeholder="(1-low, 5-high)"
                onChange={(e) => setUnderstandRating(e.target.value)}
                value={understandRating} />
            <button data-testid="next" onClick={storeRank}>Next</button>

        </div>
    )
}

export default Understand;