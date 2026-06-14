// function Stats() {
//   return (
//     <section className="stats">
//       <div>250+ Shows</div>
//       <div>100K Fans</div>
//       <div>8+ Years</div>
//       <div>50+ Cities</div>
//     </section>
//   );
// }

// export default Stats;

const [page, setPage] = useState(0);

const reviews = [
  { name: "Rahul Sharma", review: "Amazing live performance! The energy was incredible." },
  { name: "Priya Verma", review: "Outstanding vocals and stage presence." },
  { name: "Amit Singh", review: "Best live show I've attended." },
  { name: "Neha Gupta", review: "Loved every moment of the event." },
  { name: "Rohit Kumar", review: "Fantastic crowd interaction." },
  { name: "Anjali Mehta", review: "Highly recommended for weddings." },
  { name: "Vikas Yadav", review: "Wonderful experience from start to finish." },
  { name: "Simran Kaur", review: "Amazing voice and performance." },

  { name: "Arjun Gupta", review: "Professional artist with great energy." },
  { name: "Meera Sharma", review: "Guests couldn't stop talking about the show." },
  { name: "Deepak Verma", review: "Superb stage performance." },
  { name: "Sneha Kapoor", review: "Worth every penny." },
  { name: "Karan Malhotra", review: "Unforgettable evening." },
  { name: "Pooja Arora", review: "Excellent crowd engagement." },
  { name: "Harsh Jain", review: "Fantastic singer and performer." },
  { name: "Riya Singh", review: "One of the best artists I've seen live." },

  { name: "Nitin Sharma", review: "The audience loved every song." },
  { name: "Aakash Gupta", review: "Amazing atmosphere throughout." },
  { name: "Sakshi Verma", review: "Professional and talented." },
  { name: "Aditya Kumar", review: "Excellent performance quality." },
  { name: "Isha Mehta", review: "Perfect for private parties." },
  { name: "Varun Singh", review: "The highlight of our event." },
  { name: "Tanvi Arora", review: "Everyone was dancing and singing along." },
  { name: "Mohit Jain", review: "Great voice and confidence." },

  { name: "Ankit Sharma", review: "The show exceeded expectations." },
  { name: "Payal Gupta", review: "Amazing stage presence." },
  { name: "Vivek Singh", review: "Guests were impressed." },
  { name: "Nidhi Kapoor", review: "Perfect entertainer." },
  { name: "Abhishek Kumar", review: "Professional from beginning to end." },
  { name: "Kritika Arora", review: "Wonderful live singing." },
  { name: "Manish Verma", review: "A memorable event." },
  { name: "Shreya Gupta", review: "Excellent performance." },

  { name: "Ayush Sharma", review: "Truly entertaining show." },
  { name: "Komal Jain", review: "Everyone enjoyed the music." },
  { name: "Yash Gupta", review: "Fantastic event experience." },
  { name: "Ananya Singh", review: "Great voice and personality." },
  { name: "Dev Verma", review: "Perfect crowd connection." },
  { name: "Ritika Sharma", review: "Amazing musical talent." },
  { name: "Aman Gupta", review: "Highly energetic performance." },
  { name: "Kunal Arora", review: "One of the best bookings we've made." },

  { name: "Tanya Kapoor", review: "Professional and entertaining." },
  { name: "Shivam Kumar", review: "Everyone loved the performance." },
  { name: "Parul Singh", review: "Fantastic evening with great music." },
  { name: "Rohan Verma", review: "Outstanding event experience." },
  { name: "Muskan Sharma", review: "Amazing live artist." },
  { name: "Aditi Gupta", review: "Great stage confidence." },
  { name: "Gaurav Jain", review: "Wonderful crowd interaction." },
  { name: "Nikita Arora", review: "The performance was unforgettable." },

  { name: "Rajat Kumar", review: "Perfect for concerts and events." },
  { name: "Sonia Verma", review: "Excellent music and entertainment." }
];

const visibleReviews = reviews.slice(page * 8, page * 8 + 8);