import React from 'react';
import Logo from "./img/cover.jpg";
import KreuImg1 from "./img/kreu-img-1.jpg";
import KreuImg2 from "./img/kreu-img-2.jpg";
import KreuImg3 from "./img/kreu-img-3.jpg";
import KreuImg4 from "./img/kreu-img-4.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import 'animate.css';

function Kreu({ setIsAuth }) {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);


  return (
    <div>
      <div className="cover-section">
        <img className="cover" src={Logo} />
        <h2 className="display-3 cover-text">Dhuro për fëmijët në nevojë, në mënyrë që cdo fëmijë të rritet ashtu sic e meriton
        </h2>
      </div>

      <h2 className="entry-text-intro reveal">Është kaq e thjeshtë</h2>

      <div className='container'>
        <div className='section'>
          <h3 className='section-title text-center reveal'><span className='arrow'>⇛</span>Krijo llogarinë tënde</h3>
          <img className='row  mx-auto my-5 section-img' src={KreuImg1} />
        </div>

        <div className='section'>
          <h3 className='section-title text-center reveal'><span className='arrow'>⇛</span>Shiko të gjitha postimet</h3>
          <img className='row  mx-auto my-5 section-img' src={KreuImg2} />
        </div>

        <div className='section'>
          <h3 className='section-title text-center reveal'><span className='arrow'>⇛</span>Krijo postimin tënd</h3>
          <img className='row  mx-auto my-5 section-img' src={KreuImg3} />
        </div>

        <div className='section'>
          <h3 className='section-title text-center reveal'><span className='arrow'>⇛</span>Dhuro para online</h3>
          <img className='row  mx-auto my-5 section-img' src={KreuImg4} />
        </div>
      </div>

      <Footer />

    </div >
  );
}

export default Kreu;