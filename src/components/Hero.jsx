import "./HeroStyles.css";


function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="HeroImg"/>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className = {props.btnClass}>{props.buttonText}</a>
        </div>
      </div>
    </>
  );
}
// Your Journey Your Story    Choose Your Favourite Destination.
export default Hero;
