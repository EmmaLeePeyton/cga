import "../css/Who.css";
import tomHead from '../images/tomhead.jpg';

const Sc = () => {
  return (
    <section class="two">
      <h1>History</h1>
      <div>
        <img class="history-img" src={tomHead} alt="portrait of Tom"/>
        <p>The Christian Golfers' Association was founded and established as a national ministry in July 1996 primarily in an effort to provide opportunities for Christians to enjoy the game with fellow Christian golfers in a fun, clean environment. However, the founders quickly realized that God had His hand on the ministry. And, from the hundreds of inquiries received, that the Association provided much more than an opportunity to play golf! It offered its members tremendous potential to witness and spread the word of Jesus Christ to the many thousands of golfers, both Christian and non-Christian alike, who enjoy the game. Based in Sumter, South Carolina the Christian Golfers' Association is led by Tom Winstead, Sr., President, Tom Winstead, Jr., Senior Vice President, and a National Advisory Board elected from the membership.</p>
      </div>
    </section>
  );
};

export default Sc;