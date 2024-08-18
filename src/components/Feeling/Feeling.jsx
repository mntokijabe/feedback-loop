import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Feeling () {
    const [feelingRating, setFeelingRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = (event) => {
        event.preventDefault();
        if(feelingRating > 5 || feelingRating<1) {
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
            <h2>How are you feeling today?</h2>
            <form onSubmit={storeRank}>
                <label>Feeling?</label>
                <input required
                    data-testid="input"
                    type="number"
                    placeholder="(1-low, 5-high)"
                    onChange={(e) => setFeelingRating(e.target.value)}
                    value={feelingRating} />
                <button data-testid="next">Next</button>
            </form>

        </div>
    )
}

export default Feeling;