import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Comments () {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const storeRank = () => {
        dispatch ({
            type: "COMMENTS",
            payload: comments
        })
        history.push('/review')
    }
    return (
        <div>
            <h2>Any comments you want to leave?</h2>

            <label>Comments</label>
            <input className="comment"
                data-testid="input"
                type="text"
                placeholder="enter comments here"
                onChange={(e) => setComments(e.target.value)}
                value={comments} />
            <button data-testid="next" onClick={storeRank}>Next</button>

        </div>
    )
}

export default Comments;