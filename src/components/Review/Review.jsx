import "./Review.css"
const Review = (props) => {
    return ( 
        <div className="review-wrapper">
            <div className="reviewer-flex">
                <img className="reviewer-dp" src={`dp/${props.data.dp}`} alt="" />
                <div className="reviewer">
                    <p className="reviewer-name">{props.data.name}</p>
                    <p className="reviewer-verified">{props.data.status}</p>
                </div>
            </div>
            <p className="reviewer-review">{props.data.review}</p>
        </div>
     );
}
 
export default Review;