import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './index.css';

function Part2() {
    return (
        <>
        <div>
        <div className='part2'>
            <h1 className='head'>Top Ranked Trainer</h1>
            <div className='container'>
               <img src='https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868' alt='image' className='image'/>
               <div className='sub-container'>
                <p className='name'>Tharus Migulko</p>
                <div className='sub-sub-container'>
                    <p className='status'>Available Now</p>
                    <p className='follow'>Follow</p>
                </div>
               
                </div>
                <div className='button'>
                <button className='butt'>Get in Touch</button>
            </div>
            </div>
            <div className='part3'>
        <p className='para'>Hey All!!</p>
        <p className='para'>I've decided to make a redesign and animation for the Ahead app. Please review and happy to read your feedback!</p>

        <p className='para'> Design — Figma</p>
        <p className='para'>Illustrations — Adobe Illustrator</p>
        <p className='para'>Animation — Adobe After Effects</p>
        <p className='para'> *************</p>
        <p className='para'> 💌 I am open to new projects! <a href="mailto:hey@migulko.cz">hey@migulko.cz</a></p>
        <p className='para'> *************</p>
        </div>

        
        <div className='part4'>
        <nav className="navbar">
      <div className="nav-left">
      <img src='https://ph-files.imgix.net/26361f8b-7382-40c3-9a99-70ee74717d30.jpeg?auto=format' alt='image' className='small-img'/>
        <a href="Emotions" className='items'>Emotions</a>
        <a href="Manifesto"className='items'>Manifesto</a>
        <a href="Test"className='items'>Self-awareness test</a>
        <a href="Work-with-us"className='items'>Work with us</a>
     
     
       
        <button className='down-butt'>Download App</button>
      </div>
    </nav>
    </div>
    <div className='card'>
        <p className='ahead'>Ahead app</p>
        <h1 className='card-head'>Master your life <br/>by Mastering <br/>emotions</h1>
        <div className='sub-card'>
            <p className='download'>Download on the</p>
            <div className='apple-icon'>
            <FontAwesomeIcon icon={faAppleWhole} className='icon' />
           
            <p className='app-store'>App Store</p>
            </div>
        </div>
        <div className='stars'>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <p className='review'>100+ App Store Reviews</p>
        </div>
    
    </div>
       
        <div className='part5'>
            <div className='sub-part'>
                <h1 className='part5-head'>
                    EQ beats IQ
                </h1>
            </div>
            <div className='sub-part'>
                <p className='part5-para'>People with high emotional <br/>intelligence(EQ) live more fullfilled <br/> lives. They tend to be happier and <br/>have healthier relationships.</p>
            </div>
            <div className='sub-part'>
                <p className='part5-para'>They are more successfull in thier <br/> pursuits and make for inspiring <br/> leaders. According to science, they <br/>earn $29k a year</p>
            </div>
            </div>
            <div className='part6'>
                <h1 className='part6-head'>Does this sound familier...</h1>
                <div className='part6-card-container'>
                <div className='part6-card0'>
                   <h1 className='part6-card-head'>quable with your partner</h1>
                   <p className='part6-para'>cuse them of doing that thing you they always do it!), instead of calm addressing thier ns.</p>
               </div>
                    <div className='part6-card1'>
                    <FontAwesomeIcon icon= {faFaceAngry} className='emoji' />
                        <h1 className='part6-card-head'>You Argue with a colleguage</h1>
                        <p className='part6-para'>You get angry and defensive, instead of saying open and working towards common ground</p>
                    </div>
                    <div className='part6-card2'>
                    <FontAwesomeIcon icon= {faFaceAngry} className='emoji' />
                        <h1 className='part6-card-head2'>You Argue with a colleguage</h1>
                        <p className='part6-para2'>You get angry and defensive, instead of saying open and working towards common ground</p>
                    </div>
                   
                    <div className='part6-card3'>
                    <FontAwesomeIcon icon= {faFaceAngry} className='emoji' />
                        <h1 className='part6-card-head'>You Argue with a colleguage</h1>
                        <p className='part6-para'>cuse them of doing that thing you they always do it!).</p>
                    </div>

                </div>
            </div>
            <div className='part1'>
                <div className='part1-card1'>
                    <p className='part1-para'>Build out of Frustation</p>
                    <h1 className='part1-head'>Meet the ahead app</h1>
                </div>
                <div className='part1-card2'>
                    <p className='part1-para2'>A personalized pocket couch that provides bite- <br/> sized, science-driven tools to boost emotional <br/> intelligence.</p>
                    <p className='part1-para3'>Think of it as a pocket cheerleader towards a <br/> better, more fulfilling.</p>
            
                </div>
            </div>
            <div className='part5'>
            <div className='sub-part'>
                <h1 className='part5-head'>
                    Be the best you <br/> with EQ 
                </h1>
            </div>
            <div className='sub-part'>
                <p className='part5-para'>Nothing having your own emotions <br/>under control might be holding <br/>you back</p>
            </div>
            <div className='sub-part'>
                <p className='part5-para'>Additionally, not understanding <br/> those of others stops you from <br/> being parent, friend you can be.</p>
            </div>
            </div>
            <div className='part7'>
                <p className='part7-line'>We take privacy Seriously</p>
                <h1 className='part7-head'>Before you get started</h1>
                <p className='part7-para'>"We won't share you answers with anyone (and won't ever tell <br/>you which friends said what about you)" </p>
                <p className='part7-last'>with love, <span className='span'>Tarus Migulko</span></p>

                <button className='test-button'>Start a test</button>
                <p className='part7-lastline'>Take only 5 minutes</p>
            </div>
            <div className='part6'>
                <h1 className='vhead'>Open Vacancies</h1>
                <div className='part6-card-container'>
                <div className='job-card'>
                   <h1 className='job-head'>Senior Full Stack Engineer</h1>
                   <ul className='lists'>
                    <li className='items'>Full time position</li>
                    <li className='items'>Berlin or remote</li>
                    <li className='items'>$65k-$85k,0.5-1.5% equality share options</li>
                   </ul>
               </div>
               <div className='job-card'>
                   <h1 className='job-head'>Senior Desinger</h1>
                   <ul className='lists'>
                    <li className='items'>Full time position</li>
                    <li className='items'>Berlin or remote</li>
                    <li className='items'>$40k-$55k,0.25-0.50 %equality share options</li>
                   </ul>
               </div>
               <div className='job-card'>
                   <h1 className='job-head'>Super Star Intern</h1>
                   <ul className='lists'>
                    <li className='items'>Full time position</li>
                    <li className='items'>Berlin or remote</li>
                    <li className='items'>$20k-$24k,0.5-1.5%equality share options</li>
                   </ul>
               </div>
                    
                </div>
            </div>

            <hr className='hr'/>
            <div className='part8'>
                <img src='https://ph-files.imgix.net/26361f8b-7382-40c3-9a99-70ee74717d30.jpeg?auto=format' alt='image' className='small-img '/>
                <div className='part8-card'>
                    <div className='part8-subcard'>
                        <div className='part8-sub-sub-card'>
                    <FontAwesomeIcon icon={faLocationDot} className='location'/>
                    </div>
                        <p className='email'>Augustrase 26, 10117 Berlin</p>
                    </div>
                    <div className='part8-subcard'>
                    <div className='part8-sub-sub-card'>
                    <FontAwesomeIcon icon={faEnvelope} className='location'/>
                    </div>
                        <p className='email'>hi@ahead-app.com</p>
                    </div>


                </div>
                <div className='sub-card'>
            <p className='download'>Download on the</p>
            <div className='apple-icon'>
            <FontAwesomeIcon icon={faAppleWhole} className='icon' />
           
            <p className='app-store'>App Store</p>
            </div>
      
        <p className='part8-line'>&copy; 2022 Ahead app.All rights reserved.</p>
            </div>
            </div>
            <div className='part8'>
            <div className="horizontal-line left"></div>
                <img src='https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868' alt='image' className='person-img '/>
                <div className="horizontal-line right"></div>

                <p className='person-email'>Email me hey@migulko.cz</p>
                <button className='touch-button'>Get in touch</button>
      
        
            </div>
            </div>
         
        </div>
        
       </>

    )
}
export default Part2;