import "./AddCommentInput.scss";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";

function AddCommentInput() {
    const [commnet, setComment] = useState<string>("");
    const handleCommentPost = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Add comment post logic
    };
    return (
        <div className="add-comment">
            <div className="add-comment__image-wrapper">
                <img src="https://via.placeholder.com/150" alt="User" />
            </div>
            <form onSubmit={handleCommentPost}>
                <input
                    type="text"
                    value={commnet}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment..."
                />
                <button type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </form>
        </div>
    );
}

export default AddCommentInput;
