import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Supported () {
    const [supportedRating, setSupportedRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = () => {
        dispatch ({
            type: "SUPPORTED_RANK",
            payload: supportedRating
        })
        history.push('/comments')
    }
    return (
        <div>
            <h2>How well are you being supported?</h2>

            <label>supported?</label>
            <input 
                data-testid="input"
                type="number"
                placeholder="(1-low, 5-high)"
                onChange={(e) => setSupportedRating(e.target.value)}
                value={supportedRating} />
            <button data-testid="next" onClick={storeRank}>Next</button>

        </div>
    )
}

export default Supported;