import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


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
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={storeRank}>
                <label>Understand?</label>
                <input required
                    data-testid="input"
                    type="number"
                    placeholder="(1-low, 5-high)"
                    onChange={(e) => setUnderstandRating(e.target.value)}
                    value={understandRating} />
                <button data-testid="next">Next</button>
            </form>

        </div>
    )
}

export default Understand;