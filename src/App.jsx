import "./App.css";
import Title from "../src/components/Title/Title";
import Rating from "../src/components/Rating/Rating";
import dataRating from "../src/components/Rating/dataRating";
import Review from "../src/components/Review/Review";
import dataReview from "./components/Review/dataReview";
function App() {
  const rating = dataRating.map((details) => {
    return <Rating key={details.id} data={details} />;
  });
  const review = dataReview.map((details) => {
    return <Review key={details.id} data={details} />;
  });
  return (
    <div className="App">
      <Title />
      {rating}
      {review}
    </div>
  );
}

export default App;
