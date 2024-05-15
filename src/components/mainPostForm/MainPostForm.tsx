import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainPostForm.scss";
import { faCamera, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import FileInput from "../fileInput/FileInput";

function MainPostForm() {
    const [postImage, setPostImage] = useState<File | null>(null);
    return (
        <form className="main-post-form">
            <textarea placeholder="New Post" />
            <div className="main-post-form__controls">
                <div className="main-post-form__controls__files">
                    <FileInput
                        icon={
                            <FontAwesomeIcon className="icon" icon={faCamera} />
                        }
                        setFile={setPostImage}
                    />
                </div>
                <button type="submit">
                    <FontAwesomeIcon className="icon" icon={faPaperPlane} />
                </button>
            </div>
        </form>
    );
}

export default MainPostForm;
