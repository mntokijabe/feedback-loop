import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function Success () {
    const [feelingRating, setFeelingRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = () => {
        dispatch ({
            type: "CLEAR_ALL",
            payload: ('')
        })
    history.push('/')
    }
    return (
        <div>
            <h2>THANK YOU</h2>
            <button data-testid="next" className="newFeedback" onClick={storeRank}>Leave New Feedback</button>
        </div>
    )
}

export default Success;