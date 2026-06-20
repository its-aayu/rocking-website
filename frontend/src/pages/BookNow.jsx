// import Contact from "./Contact";

// function BookNow() {
//   return (
//     <div>
//       <h1 style={{ color: "white", textAlign: "center", marginTop: "120px" }}>
//         General Booking
//       </h1>

//       <Contact />
//     </div>
//   );
// }

// export default BookNow;

import Contact from "./Contact";

function BookNow() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        paddingTop: "100px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff1a1a",
          marginBottom: "20px",
        }}
      >
        BOOK YOUR EVENT
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#ccc",
          marginBottom: "40px",
        }}
      >
        Concerts • Home Parties • Weddings • Corporate Events
      </p>

      <Contact />
    </div>
  );
}

export default BookNow;