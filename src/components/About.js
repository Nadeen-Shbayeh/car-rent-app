import React  from 'react';
import '../styles/About.css';
import TeamMember1 from '../assets/m1.jpg';
import TeamMember2 from '../assets/m2.jpg';
import TeamMember3 from '../assets/m3.jpg';
import CountUp from 'react-countup';

const About = () => {
    
  return (
    <div className="about-container">
      <h1 className="title">About Us</h1>

      <section className="about-intro">
        <p>
          Welcome to our premium car rental service. We provide a wide range of vehicles to suit your needs, 
          from compact cars for city driving to luxury cars for special occasions. Our mission is to make your rental experience seamless and enjoyable.
        </p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
          to make car rentals easy, affordable, and reliable for everyone. We are committed to delivering a seamless booking experience through our user-friendly platform, offering a diverse fleet of well-maintained vehicles to meet the needs of every customer. With a focus on quality, transparency, and customer satisfaction, we aim to provide exceptional service at competitive prices.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
          to transform the car rental experience by offering seamless, reliable, and accessible transportation solutions for everyone. We strive to make car rentals easy, affordable, and convenient, whether you're exploring a new city, embarking on a road trip, or simply in need of a temporary vehicle.
          </p>
        </div>
      </section>


      

      <section className="stats">
        <h2>Our Achievements</h2>
        <div className="stats-container">
          <div className="stat-item">
            <h3>
              <CountUp end={500} duration={2} />+
            </h3>
            <p>Cars in Fleet</p>
          </div>
          <div className="stat-item">
            <h3>
              <CountUp end={95} duration={2} />%
            </h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>
              <CountUp end={20000} duration={2} />+
            </h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={TeamMember1} alt="John Doe" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={TeamMember2} alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <img src={TeamMember3} alt="Mike Johnson" />
            <h3>Mike Johnson</h3>
            <p>Lead Customer Support</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"Amazing service and a great selection of cars! Will definitely rent again."</p>
          <cite>- Sarah K.</cite>
        </div>
        <div className="testimonial">
          <p>"Loved the electric vehicle options. I felt good about making a greener choice."</p>
          <cite>- Michael B.</cite>
        </div>
      </section>


    </div>
  );
};

export default About;
