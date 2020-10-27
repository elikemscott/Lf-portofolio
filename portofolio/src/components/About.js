import React from 'react';
import contact_image from '../Images/image_7.jpeg'

 function About() {
    return (
        <div>
            
            <div>
                <p id="firm">Our Firm</p>     <p className="home"> <a>Home </a> - About Us</p>
                <hr className="pr_hr"/>
            </div>

            <p className="about_profile"> <span>Richard Chapman, ESQ,</span> &nbsp; I makes it a point to understand my clients' business, needs and industries. 
            This approach is the key to me having successfully represented clients in the financial services, marine, real estate and development,
             employee staffing, manufacturing and insurance industries. With my guidance and approach, my clients have obtained multimillion-dollar jury verdicts,
              and defeated or resolved adverse claims seeking billions of dollars in damages.</p>

                  <div className="about_trust">
                      <h4> Trust and Leadership</h4>
                      <hr/>
                  </div>
                  <div class="about_flex-container">
        <div className="about_investment_law">
        <h6 className="about_practice_area">Practice Areas </h6> 
          <br /> <br />
          <p>
           <ul>
             <li>Cooperate Finance and Securities</li>
             <li>Investment Law</li>
             <li>Taxation</li>
             <li>Administration of Estate and probate</li>
             <li>Privatization and diversiture</li>
           </ul>
          </p>
        


        </div>

        <div className="about_taxation">
          <h6 className="about_mission">Our Mission</h6>   <br /> <br />
          <p>
          Deliver professional services at the highest levels of competence.
Share strong insights into the intricacies of commercial and corporate practice in the U.S.A.
Respond rapidly and effectively to the needs of clients.

          </p>
        </div>

        <div className="admin">
         <h6 className="about_benefits" id='about_benefits'>Benefits</h6>   <br /> <br />
          <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  30 minutes free consultation.
          </p>
        </div>
        
      </div>

      <div className="container">
          <div className="row">
              <div className="col-12 col-md-8">Why Me <hr/>
             
<div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

  
  <div class="card">

    
    <div class="card-header" role="tab" id="headingOne1">
      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
        aria-controls="collapseOne1">
        <h5 class="mb-0">
        FLEXIBLE, VALUE-DRIVEN APPROACH <i class="fas fa-angle-down rotate-icon"></i>
        </h5>
      </a>
    </div>

    
    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
      data-parent="#accordionEx">
      <div class="card-body">
      With my experience, I effectively provide clients with the attention and commitment that they expect and deserve. 
      I strive to provide a value-driven approach to each case by communicating and strategizing with my clients to meet their needs and goals.
      </div>
    </div>

  </div>
  
  <div class="card">

    
    <div class="card-header" role="tab" id="headingTwo2">
      <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
        aria-expanded="false" aria-controls="collapseTwo2">
        <h5 class="mb-0">
        CLIENT-FOCUSED SOLUTIONS AND RESULTS <i class="fas fa-angle-down rotate-icon"></i>
        </h5>
      </a>
    </div>

   
    <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
      data-parent="#accordionEx">
      <div class="card-body">
      I am focused on my clients’ demands for an exceptional legal service model that provides value. I understand that, for clients, 
      value is not a mere hourly rate comparison. Value means efficient processes for tracking and reporting; creative approaches to reducing legal risk; 
      enhanced cost certainty; and RESULTS.
      </div>
    </div>

  </div>
  
  
  

</div>

              
              </div>


              <div className=" col-12 col-md-4"> Contact now <hr/>
             
<div class="card card-cascade wider">

  
  



<div class="card card-cascade">

  
  <div class="view view-cascade overlay">
    <img class="card-img-top" src={contact_image} height='280px' alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  
  <div class="card-body card-body-cascade text-center">

    
    <h4 class="card-title"><strong>Richard Chapman</strong></h4>
    
    
    
    <p class="card-text">For support or any questions: <br/>
Email us at richard@mail.com <br/> <br/> Richard Chapman, ESQ USA <br/>
20 Commerce Dr
Cranford, <br/> NJ 07016
USA <br/> <br/> Call us <br/>
4848393939393 <br/>
0948444646472

    </p>

    
   

  </div>

</div>
</div>
              </div>
      </div>
             

      
      

      <div className='testimonials'>
      <h4>Testimonials</h4>
      <span className="line1"></span> <span class="dot1"></span>
      <span class="dot2"></span> <span className="line2"></span>
      </div>
      

      

      <div className="container">
          <div className="row">
              <div className="col"> <i> <q>Richard has acted in the role of principal legal counsel 
                to our company for over seven years. Richard provides a robust blend of integrity, tenacity,
                 and vision to the attorney-client relationship. His follow up also helps ensure that a case is
                  progressing as swiftly as possible. Richard chapman scores a “10” in our book.</q> </i> <br/>   <p className="testimonial_name">Jimmy Collinson. Investor</p> </div>
              <div className="col"> <i> <q>Richard Chapman has been involved in litigation on my behalf over the last several years, with two complicated cases. 
                He is very responsive, and provide a high level of service. He never seems at a loss to delve into the complexities of a difficult
                 situation, and has an excellent knack for breaking a case down into its basic elements and developing a strategy from there. I would 
                 highly recommend an exploratory call to Richard if you have the need for litigation counsel.</q> </i> <br/> <p className="testimonial_name">DF, Physician and Real Estate Investor</p> </div>
              <div className="col"> <i> <q>Over the past three decades, I have owned or managed a number of corporations 
                that did business with companies all across the country. This experience gave me the opportunity to interact 
                with more law firms and attorneys than I could count. With that background, I have a good perspective on what makes up 
                the kind of law firm I want to deal with. I was extremely pleased with the manner in which Richard Chapman esq handled my 
                investment dispute with a national brokerage firm. Richard demonstrated a level of professional competence I have seldom found 
                in a law firm. Moreover, most importantly, my case was brought to a very successful conclusion by the Vernon Litigation lawyers.</q> </i> <br/> <p className="testimonial_name">Orlando Bennet. Entrepreneur</p> </div>
          </div>
      </div>
            
        </div>
        </div>
        
        
        
        
    )
}

export default About;
