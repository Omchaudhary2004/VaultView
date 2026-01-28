import bg from "../assets/bg.mp4";
import Nav_bar from "./navbars";
import "./landing.css";
import Footers from "./footer";
function Landing() {
  return (
    <div className="video-wrapper">
      <video
        className="video-bg"
        src={bg}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="overlay" />

      <div className="content">
        <Nav_bar />
        <h1>Recover Wallet and View Balance Securely</h1>
        <p>Choose a blockchain to get started.</p>
        <button>Solana</button>
        <button>Ethereum</button>
      </div>
      <Footers />
    </div>
  );
}

export default Landing;
