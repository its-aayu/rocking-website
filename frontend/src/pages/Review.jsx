// import "../css/Review.css";

// function Review() {
//   const reviews = [
//     {
//       name: "Rahul Sharma",
//       review:
//         "Amazing live performance! The energy was incredible and the crowd loved every moment.",
//     },
//     {
//       name: "Priya Verma",
//       review:
//         "Booked for our wedding event. Outstanding voice and stage presence. Highly recommended!",
//     },
//     {
//       name: "Amit Singh",
//       review:
//         "One of the best live artists we've worked with. Professional and entertaining.",
//     },
//   ];

//   return (
//     <section className="review-section" id="reviews">

//       <h2>WHAT PEOPLE SAY</h2>
//       <p>Real experiences from happy clients.</p>

//       <div className="review-container">

//         {reviews.map((review, index) => (
//           <div className="review-card" key={index}>

//             <div className="stars">
//               ⭐⭐⭐⭐⭐
//             </div>

//             <p className="review-text">
//               "{review.review}"
//             </p>

//             <h4>{review.name}</h4>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }

// export default Review;

// import { useState } from "react";
// import "../css/Review.css";

// import Review from "./Review";

// function Review() {

//   const reviews = [
//     { name: "Rahul", review: "Amazing performance!" },
//     { name: "Priya", review: "Outstanding vocals!" },
//     { name: "Amit", review: "Best live show ever." },
//     { name: "Neha", review: "Loved every moment." },
//     { name: "Rohit", review: "Fantastic energy." },
//     { name: "Anjali", review: "Highly recommended." },
//     { name: "Vikas", review: "Wonderful experience." },
//     { name: "Simran", review: "Great crowd engagement." },
//     { name: "Arjun", review: "Professional artist." },
//     { name: "Meera", review: "Amazing voice." },
//     { name: "Deepak", review: "Superb performance." },
//     { name: "Sneha", review: "Worth every penny." },
//     { name: "Karan", review: "Unforgettable show." },
//     { name: "Pooja", review: "Excellent stage presence." },
//     { name: "Harsh", review: "Fantastic singer." }
//   ];

//   const [visible, setVisible] = useState(5);

//   return (
//     <section className="review-section">

//       <h2>WHAT PEOPLE SAY</h2>

//       <div className="review-grid">

//         {reviews.slice(0, 8).map((review, index) => (
//           <div className="review-card" key={index}>
//             <div className="stars">⭐⭐⭐⭐⭐</div>
//             <p>{item.review}</p>
//             <h4>{item.name}</h4>
//           </div>
//         ))}

//       </div>

//       {visible < reviews.length && (
//         <button
//           className="load-btn"
//           onClick={() => setVisible(visible + 5)}
//         >
//           LOAD MORE
//         </button>
//       )}

//     </section>
//   );
// }

// export default Review;


import { useState } from "react";
import "../css/Review.css";

function Review() {

  const reviews = [
    { name: "Rahul", review: "Amazing performance!" },
    { name: "Priya", review: "Outstanding vocals!" },
    { name: "Amit", review: "Best live show ever." },
    { name: "Neha", review: "Loved every moment." },
    { name: "Rohit", review: "Fantastic energy." },
    { name: "Anjali", review: "Highly recommended." },
    { name: "Vikas", review: "Wonderful experience." },
    { name: "Simran", review: "Great crowd engagement." }
  ];

  const [visible, setVisible] = useState(8);

  return (
    <section className="review-section">

      <h2>WHAT PEOPLE SAY</h2>

      <div className="review-grid">

        {reviews.slice(0, visible).map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>{review.review}</p>
            <h4>{review.name}</h4>
          </div>
        ))}

      </div>

      {visible < reviews.length && (
        <button
          className="load-btn"
          onClick={() => setVisible(visible + 8)}
        >
          LOAD MORE
        </button>
      )}

    </section>
  );
}

export default Review;