import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Supported () {
    const [supportedRating, setSupportedRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = () => {
        if(supportedRating > 5 || supportedRating<1) {
            alert('Use a number between 1 and 5')
        }
        else {dispatch ({
                type: "SUPPORTED_RANK",
                payload: supportedRating
            })
            history.push('/comments')
        }
    }
    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={storeRank}>
                <label>supported?</label>
                <input required
                    data-testid="input"
                    type="number"
                    placeholder="(1-low, 5-high)"
                    onChange={(e) => setSupportedRating(e.target.value)}
                    value={supportedRating} />
                <button data-testid="next">Next</button>
            </form>

        </div>
    )
}

export default Supported;