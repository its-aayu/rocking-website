import "../css/Service.css";
import {
  FaMicrophone,
  FaGraduationCap,
  FaHome,
  FaHeart,
  FaBuilding,
  FaGuitar
} from "react-icons/fa";

function Service() {
  const services = [
    {
      icon: <FaMicrophone />,
      title: "Rock Concerts",
      text: "High-energy live performances for concerts and festivals."
    },
    {
      icon: <FaGraduationCap />,
      title: "College Fests",
      text: "Interactive and crowd-pulling college performances."
    },
    {
      icon: <FaHome />,
      title: "Private Parties",
      text: "Birthday parties, house parties and private gatherings."
    },
    {
      icon: <FaHeart />,
      title: "Weddings",
      text: "Sangeet, Mehendi, Reception and Wedding performances."
    },
    {
      icon: <FaBuilding />,
      title: "Corporate Events",
      text: "Annual functions, award nights and business events."
    },
    {
      icon: <FaGuitar />,
      title: "Club Shows",
      text: "Live music nights and premium lounge performances."
    }
  ];

  return (
    <section className="service-section" id="services">

      <h2>MY SERVICES</h2>
      <p>
        Making every event unforgettable with music and energy.
      </p>

      <div className="service-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Service;