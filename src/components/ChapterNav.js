import {Link} from "react-router-dom";
import "../css/Chapters.css";

const ChapterNav = () => {
  return (
    <section className="one hidden-aside">
      <h4>Chapters</h4>
      <ol>
        <li><Link to="/ar">AR</Link></li>
        <li><Link to="/fl">FL</Link></li>
        <li><Link to="/la">LA</Link></li>
        <li><Link to="/sc">SC</Link></li>
        <li><Link to="/tn">TN</Link></li>
        <li><Link to="/tx">TX</Link></li>
        <li><Link to="/wv">WV</Link></li>
      </ol>
    </section> 
  );
};

export default ChapterNav;