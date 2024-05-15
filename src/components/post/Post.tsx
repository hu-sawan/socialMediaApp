import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalculatePostTime } from "../../utils/Date";
import "./Post.scss";
import { faEllipsis, faPlus, faShare } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";
import AddCommentInput from "../addCommentInput/AddCommentInput";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__header-left">
                    <div className="post__header-img">
                        <img
                            src="https://via.placeholder.com/150"
                            className="post__header-user-image"
                            alt="User"
                        />
                    </div>
                    <div className="post__header-user-info">
                        <h3 className="post__header-user-info__username">
                            Username
                        </h3>
                        <p className="post__header-user-info__date">
                            {CalculatePostTime(new Date("2024-5-14"))}
                        </p>
                    </div>
                </div>
                <div className="post__header-right">
                    <button className="post__header-button">
                        <FontAwesomeIcon icon={faPlus} />
                        Add Friend
                    </button>
                    <button className="post__header-button">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </button>
                </div>
            </div>
            <div className="post__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                sunt recusandae reprehenderit, iusto aliquid nihil quis quasi
                repellendus soluta quidem asperiores corrupti! Voluptas facilis
                rerum magnam voluptates amet expedita! Aut repellendus facere
                animi aspernatur corporis iure, id modi quam esse. Dolorum
                cumque animi error non aliquid eligendi officiis nesciunt. Unde
                natus facere voluptates, repellendus, veritatis consequuntur sed
                nisi error magnam animi temporibus. Iusto officia sequi
                necessitatibus culpa! Est, suscipit doloribus incidunt provident
                dolore laboriosam consectetur quam molestias, fugit a, deleniti
                ipsam at cum quos laudantium nesciunt ea consequuntur. Molestias
                magnam doloribus eligendi earum aut est laudantium facilis dolor
                adipisci! Suscipit?
            </div>
            <div className="post__footer">
                <div className="post__footer-buttons">
                    <button className="post__footer-button">
                        <FontAwesomeIcon className="icon" icon={faThumbsUp} />
                        Like
                    </button>
                    <button className="post__footer-button">
                        <FontAwesomeIcon className="icon" icon={faComment} />
                        Comment
                    </button>
                    <button className="post__footer-button">
                        <FontAwesomeIcon className="icon" icon={faShare} />
                        Share
                    </button>
                </div>
                <AddCommentInput />
            </div>
        </div>
    );
}

export default Post;
