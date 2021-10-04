import EventCard from "../Event/EventCard";
import "./Events.css";
import EventBg from "../../events.png";
import Articles from "../Articles/Articles";

const Events = () => {
  return (
    <div>
      <div className="row container mx-auto my-5">
        <div className="col-md-12 text-center">
          <h5 className="custom-text-color">Education For Everyone</h5>
          <h2 style={{ fontSize: "3rem" }}>Learn About Our Work Culture At Devschool</h2>
          <p className="lead">
            As a word from our heart, we love to dedicate for Kids the valuable things in Life. A great education is a must for a solid developments
            in both soul and mind for kids. We go with kids to play, learn, and grow better.
          </p>
        </div>
        <EventCard></EventCard>
        <div className="my-5">
          <img src={EventBg} alt="" />
        </div>
      </div>
      <Articles></Articles>

      <div className="container row banner-bg py-5 text-white mx-auto lesson my-5 text-center shadow">
        <div className="col-6 col-md-3">
          <h3 style={{ fontSize: "4rem" }}>780</h3>
          <p>Teaching Hours</p>
        </div>
        <div className="col-6 col-md-3">
          <h3 style={{ fontSize: "4rem" }}>910</h3>
          <p>Meals Per Years</p>
        </div>
        <div className="col-6 col-md-3">
          {" "}
          <h3 style={{ fontSize: "4rem" }}>590</h3>
          <p>Awards</p>
        </div>
        <div className="col-6 col-md-3">
          {" "}
          <h3 style={{ fontSize: "4rem" }}>840</h3>
          <p>Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
