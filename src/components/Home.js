import React from 'react';

// Images
import portrait  from '../images/portrait2.png';
import AI from '../images/businessman-AI.png';
import VR from '../images/vr-games.jpg';
import UFC from '../images/UFC-wallpaper.jpg';
import videoGames from '../images/video-game-wallpaper.jpg';
import strategy from '../images/strategy-wallpaper.jpg';
import afterlife from '../images/afterlife-wallpaper.jpg';


export default function Home() {
    return (
        <React.Fragment>
            <div className="home_container">
                <div className="home_profile_container body">
                    <div className="home_profile">
                        <img src={portrait} alt="portrait of andrew"/>
                        <h2>FULL STACK WEB DEVELOPER</h2>
                        <p>Github</p>
                        <a href="https://github.com/Clayakn">github.com/Clayakn</a>
                        <br/>
                        <p>LinkedIn</p>
                        <a href="https://www.linkedin.com/in/andrewknam/">/in/andrewknam</a>
                        <br/>
                        <p>Email: enlightenedakn@gmail.com</p>
                        <br/>
                        <p>Number: (214) - 597 - 9715</p>
                    </div>
                    <section className="home_intro">
                        <h1>Welcome to My Life</h1>
                        <p>Ever since I grew up watching other people show their greatness. I wanted to be great myself but never had a clear path to follow. I knew I liked some things here and there but I never stuck to anything. I felt like everyone was ahead of the game and I was falling behind and became depressed because of it. One day I had a vision of becoming a champion in a virtual world and became obsessed with it ever since. The field I want to master is E-Active Sports, a combination of physical sports and video games. The three core concepts of E-Active Sports include Artificial Intelligence, Human Physique, & Strategy. Everything I do is preparing some day to be a champion in an E-Active Sport.</p>
                        <br/>
                        <p>Thanks for reading ~</p>
                    </section>
                    
                </div>
            <div className="home_container">
                <div className="home_interest_container body">
                    <h3>Fields of Interest</h3>
                    <div className="home_interest_section">
                        <div className="home_interest_column">
                            <div className="home_interest_individual">
                                <p>AI</p>
                                <img src={AI} alt="AI word associations on a grey wall"/>
                            </div>
                            <br/>
                            <div className="home_interest_individual">
                                <p>E-Active Sports</p>
                                <img src={VR} alt="Two people using VR headsets to play a shooting game"/>
                            </div>
                        </div>
                        <div className="home_interest_column"> 
                            <div className="home_interest_individual">
                                <p>Physical Competition</p>
                                <img src={UFC} alt="Distance view of UFC arena"/>
                            </div>
                            <br/>
                            <div className="home_interest_individual">
                                <p>Video Game Competition</p>
                                <img src={videoGames} alt="Distance view of Dota 2 Competition on stage"/>
                            </div>
                        </div>
                        <div className="home_interest_column">
                            <div className="home_interest_individual">
                                <p>Strategy</p>
                                <img src={strategy} alt="Person in a suit contemplating with graphs displayed faintly in the background"/>
                            </div>
                            <br/>
                            <div className="home_interest_individual">
                                <p>Enlightenment</p>
                                <img src={afterlife} alt="Man in a suit walking on a white staircase towards heaven"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            </div>
        </React.Fragment>
    )
}