import React from 'react';
import "./index.css";
import springer from "../images/sp.png";
import mit from "../images/mit.png";

const Home = () => {
  return ( 
    <div>  
      <div className = 'section1' >
        <div className = 'overlayhead'>
            <div className = 'headingmain'>
                <h3 className='head1'>International Conference on Advances in Information and Communication Technology</h3>
                <p className='headpara'>Organized by the Department of Information and Communication Technology, Manipal Institute of Technology, Manipal, India</p>
                <a href="./CallforPapers">
                 <button className='buttonhead'>
                    Call for Papers
                  </button>
                </a>
            </div>
        </div>
      </div>
      <div className = 'section2'>
            <div className = 'sec0'>
            <a href='#'>
                 <button className='buttonhead1'>
                    Paper Submission Link
                  </button>
                </a>
                <a href='#'>
                 <button className='buttonhead1'>
                    Springer Link For Published Papers
                  </button>
                </a>
            </div>
      </div>
      <div className = 'section21'>
            <div className = 'sec'>
            <h3 className='head1' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">About Conference</h3>
            <p className='divi'  data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">ICAICT 2022 is a non-profit conference and it will provide an opportunity to the practicing engineers, academicians and researchers to meet in a forum to discuss various issues and its future direction in the field of Computing and Inteligent Engineering and Technologies. The conference aims to put together the experts from the relevant areas to disseminate their knowledge and experience for the relevant future research scope.</p>
            <h3 className='head1'data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">Organized By:<br/></h3>
            <div className='images' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">
            <img className='img' src={springer}></img>
            <img className='img' src={mit}></img>
            </div>
            </div>
      </div>
      <div className = 'section3'>
            <div className = 'sec1'>
                <h3 className='head1' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">ICAICT 2021</h3>
                <div className='divisions' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">
                    <h3 className='headp'>Scope of the Conference</h3>
                    <p className='divpara'>The Third International Conference on Advances in Electrical and Computer Technologies 2021 (ICAECT 2021) aims to offer a great opportunity to bring together professors, researchers and scholars around the globe a great platform to deliver the latest innovative research results and the most recent developments and trends in Electrical, Electronics and Computer Engineering and Technology fields. The conference will feature invited talks from eminent personalities all around the world, pre-conference tutorial/workshops and referred paper presentations. The vision of the ICAECT 2021 is to promote foster communication among researchers and practitioners working in a wide variety of the above areas in Engineering and Technology. PSR Engineering College, Tamil Nadu, India is the organizing partner of ICAECT 2021.  </p>
                </div>
                <div className='divisions'data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">
                    <h3 className='headp'>Publications</h3>
                    <p className='divpara'>All the submitted papers for ICAECT 2021 will undergo the stringent review process by the International Review Committee of the ICAECT 2021. The peer reviewed and selected papers of ICAECT 2021 will be published as a proceedings book entitled “Advances in Electrical and Computer Technologies” by Springer Verlag in their prestigious “Lecture Notes in Electrical Engineering” series (https://www.springer.com/series/7818). 
                    <br/>The books of proceedings of the previous editions, ICAECT 2019 and 2020 have been published as proceedings books titled “Advances in Electrical and Computer Technologies” by the Springer Verlag in the Lecture Notes in Electrical Engineering (LNEE) series which is indexed in ISI Proceedings, EI-Compendex, SCOPUS, MetaPress and Springerlink.<br/><a id='clickhere' href='https://link.springer.com/book/10.1007/978-981-15-9019-1'>Click here</a> to access the proceedings of ICAECT 2020 in LNEE, Volume 711 (2021)</p>
                </div>
                <div className='divisions'data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">
                    <h3 className='headp'>Proceedings</h3>
                    <p className='divpara'>All the submitted papers for ICAECT 2021 will undergo the stringent review process by the International Review Committee of the ICAECT 2021. All the accepted manuscripts which are registered for the ICAECT 2021 and presented during the conference shall be published in the proceedings of the third International Conference on Advances in Electrical and Computer Technologies 2021. The book of proceedings titled “Advances in Electrical and Computer Technologies” will be published in the Lecture Notes in Electrical Engineering (LNEE) series by the Springer Publishing House.                
                    </p>
                </div>
            </div>
      </div>
      <div className = 'section4'>
            <div className = 'sec2' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">
                <h3 className='head1' id='submit'><br/>Important Deadlines</h3>
                <div className='divi'>
                    
                    <p className='divpara'>
                    <strong>Paper Submission Deadline</strong><br/>January 15, 2022<br/><br/>
                    <strong>Notification of Acceptance</strong><br/>February 15, 2022<br/><br/>
                    <strong>Video Presentation Due</strong><br/>February 28, 2022<br/><br/></p>
                </div>
            </div>
      </div>
      <div className = 'section21' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">
      <h3 className='head1'><br/>Contact Us</h3>
      <p className='divpara'>Mail us here:</p>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Manipal Institute of Technology&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
          </div>
          <h3 className='head1' id='submit'><br/>Partners</h3>
          <p className='divpara'>List Media, Academic Partners</p>
      </div>
    </div>  
  );
};

export default Home;