import "./Rating.css"
const Rating = (props) => {
    return ( 
        <div className="rating">
            <p className="rating-icon">{props.data.rating}</p>
            <p className="rating-description">{props.data.description}</p>
        </div>
     );
}
 
export default Rating;