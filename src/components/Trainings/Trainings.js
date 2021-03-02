import React, { Component } from "react";
import './static/css/style.css';
import './static/css/icons.css';
import './static/css/header.css';
import './static/css/footer.css';
import './fontawesome/css/all.css';
import enrolledstudents from './static/images/icons/enrolled-students.svg';
import calendarimg from './static/images/icons/calendar.svg';
import ps from './static/images/icons/placement-assistace.svg';
import certificate from './cached_uploads/business-communication-skills/signup_page_media/certificate.png';
import searchicon from './static/images/icons/search_plus.svg';
import book from './static/images/icons/book_outlined.svg';
import logo1 from './static/images/icons/logo1.svg';
import logo2 from './static/images/icons/logo2.svg';
import logo3 from './static/images/icons/logo3.svg';
import logo4 from './static/images/icons/logo4.svg';
import logo5 from './static/images/icons/logo5.svg';
import logo6 from './static/images/icons/logo6.svg';
import skand from './uploads/business-communication-skills/signup_page_media/teachers_images/skand_gupta.JPG';
import karthik from './uploads/business-communication-skills/signup_page_media/teachers_images/karthik.jpg';
import ScriptTag from 'react-script-tag';

class Trainings extends Component {
  render() {
    return (  
      <div className="content-container business-communication-skills">
      <section id="banner-section" >
          <div className="container py-4 pb-sm-0 banner-background-sm" >
              <div className="row">
                  <div className="col-12 col-xl-6">
                      <div className="content-container" > 
                          <p className="course-brief" >Launching, our millenial-friendly cohort</p>
                          <div className="course-headline-container d-flex">
                              <h1 className="course-headline" >
                                  <span id="course-headline" >Anyone can trade</span>
                                                              </h1>
                          </div>
                          <p className="course-brief" >Learn trading and investing principles, market jargon, ways to analyse stocks and have your trading setup. </p>
                          <div className="certified-tag d-inline-block">Total Overhead Training Cost : Rs <del style={{textDecorationThickness:"3px"}}>499</del> 420 only<br></br>
                          Total Payment : Rs 420 + 18% GST =  Rs 495.6</div>
                          <div className="tags">
                                  <div>
                                      <img src={enrolledstudents} alt="users" />
                                      <span>Peer study</span>
                                  </div>
                                  <div>
                                      <img src={calendarimg} className="calender" alt="calender" />
                                      <span>8 weekend sessions</span>
                                  </div>
                                  <div>
                                      <img src={ps} alt="placement-assistace" />
                                      <span>Trading Assistance</span>
                                  </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-xl-6">
                      <div className="form-container mx-auto mx-xl-0 ml-xl-auto">
                          <div id="signup-form">
                              <form id='donateForm'>
                                    <div className="form-group">
                                          <label>Email:</label>
                                          <input  type="text" name="email" className="input" style={{marginBottom:"1px",marginTop:"1px"}} placeholder="Email" />
                                      </div>

                                      <div className="d-flex flex-row" >
                                          <div className="form-group flex1 mr-1">
                                              <label>First Name:</label>
                                              <input type="text" className="input" style={{marginBottom:"1px",marginTop:"1px"}} placeholder="First Name" />
                                          </div>
                                          <div className="form-group flex1 ml-1">
                                              <label>Last Name:</label>
                                              <input type="text" className="input" style={{marginBottom:"1px",marginTop:"1px"}} placeholder="Last Name"  />
                                          </div>
                                      </div>
                                      <div className="form-group mb-0">
                                        <label className="control-label">Mobile Number:</label>
                                        <div className="form-row">
                                            <div className="form-group col-2">
                                                <input  type="text" className="input" style={{marginBottom:"1px",marginTop:"1px"}} value="+91" />
                                            </div>
                                            <div className="form-group col-10">
                                                <input type="text"  className="input" style={{marginBottom:"1px",marginTop:"1px"}} placeholder="Mobile Number" />
                                            </div>
                                        </div>
                                      </div>
                                      <br></br>
                                      
                                     <div className="form-group">
                                          <label>Date of Commencement </label>
                                          <input type="text" className="input" style={{marginBottom:"1px",marginTop:"1px"}}  placeholder="DD/MM/YYYY" />
                                      </div>
                                  
                                  <div className="form-group">
                                      <label className="control-label"> I am a :</label>
                                      <select className="input"  style={{marginBottom:"1px",marginTop:"1px"}} >
                                          <option value=" Student "> Student </option>
                                          <option value=" Working Professional "> Working Professional </option>
                                      </select>
                                  </div>
                                  <div className="form-group">
                                          <label>Name of the Institute/Organization</label>
                                          <input type="text" className="input" style={{marginBottom:"1px",marginTop:"1px"}} placeholder="Institute/Organization" />
                                      </div>
                                  <ScriptTag src="https://checkout.razorpay.com/v1/payment-button.js" 
                                  data-payment_button_id="pl_GgwT2VW2XQhJJb"  
                                  data-button_text = "Register"
                                  data-button_theme = "rzp-dark-standard"
                                  async> </ScriptTag> 
                              </form>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="course-highlights-section" className="section background-alternate">
        <div className="container py-5">
            <h2 className="section-heading">Training Highlights</h2>
            <div className="row mx-auto">
                                <div className="col-12 col-lg-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <i className="fas fa-laptop-house"></i>
                        </div>
                        <div className="content-container">
                            <h3 className="title">Learn from home</h3>
                            <p className="description">Stay safe indoors</p>
                        </div>
                    </div>
                </div>
                                <div className="col-12 col-lg-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <i className="fas fa-certificate"></i>
                        </div>
                        <div className="content-container">
                            <h3 className="title">Certificate of Training</h3>
                            <p className="description">From Trademanza</p>
                        </div>
                    </div>
                </div>
                                <div className="col-12 col-lg-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <div className="content-container">
                            <h3 className="title">Trading assistance</h3>
                            <p className="description">Views provided in market hours</p>
                        </div>
                    </div>
                </div>
                                <div className="col-12 col-lg-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <i className="fas fa-tv"></i>
                        </div>
                        <div className="content-container">
                            <h3 className="title">Live sessions to learn</h3>
                            <p className="description">No recorded videos sent</p>
                        </div>
                    </div>
                </div>
                                <div className="col-12 col-lg-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <i className="fas fa-lightbulb"></i>
                        </div>
                        <div className="content-container">
                            <h3 className="title">Quizzes and Assignments</h3>
                            <p className="description">To help you grasp quickly</p>
                        </div>
                    </div>
                </div>
                                <div className="col-12 col-lg-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <i className="fas fa-comments"></i>
                        </div>
                        <div className="content-container">
                            <h3 className="title">Doubt clearing</h3>
                            <p className="description">Through Q&amp;A forum</p>
                        </div>
                    </div>
                </div>
                                <div className="col-12 col-lg-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <i className="fas fa-sort-alpha-down"></i>
                        </div>
                        <div className="content-container">
                            <h3 className="title">Beginner friendly</h3>
                            <p className="description">No prior knowledge required</p>
                        </div>
                    </div>
                </div>
                                <div className="col-12 col-lg-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className="content-container">
                            <h3 className="title">6 months access</h3>
                            <p className="description">To the discussion forum</p>
                        </div>
                    </div>
                </div>
                                <div className="col-12 col-lg-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <i className="fas fa-file-download"></i>
                        </div>
                        <div className="content-container">
                            <h3 className="title">Downloadable material</h3>
                            <p className="description">For learning offline</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="course-certificate-section" className="section background-alternate">
		<div className="container py-5">
			<h2 className="section-heading"  >How will you get your certificate?</h2>
			<div className="row align-items-center mx-auto">
				<div className="content-container col-12 col-lg-6">
					<p className="content white">
						Take the final exam online to complete the Investment Basics and Introduction to Stock Markets program after which you will be provided your certificate
					</p>
				</div>
				<div className="image-container col-12 col-lg-6" data-toggle="modal" data-target="#certificate-modal" id="certificate-image">
                    <img className="lazy-load" src={certificate} alt="certificate" />
					<div className='search-icon-container'><img className="search-icon" src={searchicon} alt="search_plus" /></div>
				</div>
			</div>
		</div>
	</section>
  <section id="course-placement-assistance-section" className="section background-alternate">
		<div className="container py-5">
			<h2 className="section-heading">What unique add-ons will you receive?</h2>
			<div className="row mx-auto ">
				<div className="col-12 col-xl-4">
						<div className="item-container d-flex align-items-center">
							<div className="image-container">
                  <div><img src={logo1} alt="logos" /></div>
							</div>
							<div className="content-container">
								<p className="description">Guided <br></br><b>analysis of stocks</b></p>
							</div>
						</div>
					</div>
					<div className="col-12 col-xl-4">
						<div className="item-container d-flex align-items-center">
							<div className="image-container">
                  <div><img src={logo2} alt="logos" /></div>
							</div>
							<div className="content-container">
								<p className="description">Access to <b>handpicked calls</b> <br/> on the forum</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-xl-4">
						<div className="item-container d-flex align-items-center">
							<div className="image-container">
                   <div><img src={logo3} alt="logos" /></div>
							</div>
							<div className="content-container">
								<p className="description"><b> Opportunities to join </b> us on our mission to make India financially literale. </p>
							</div>
						</div>
					</div>
			</div>
		</div>
	</section>
        <section id="course-benefits-section" className="section ">
        <div className="container py-5">
            <h2 className="section-heading" >Why learn Stock Market Basics?</h2>
            <div className="row mx-auto">
                                <div className="col-12 col-xl-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <div><img src={logo4} alt="logos" /></div>
                        </div>
                        <div className="content-container">
                            <h3 className="title">Become financially literate</h3>
                            <p className="description">Improve business and financial acumen and develop an understanding of the real markets.</p>
                        </div>
                    </div>
                </div>
                                <div className="col-12 col-xl-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <div><img src={logo5}  alt="logos" /></div>
                        </div>
                        <div className="content-container">
                            <h3 className="title">Gain financial independence</h3>
                            <p className="description">Generate your secondary <br/> source of income. </p>
                        </div>
                    </div>
                </div>
                                <div className="col-12 col-xl-4">
                    <div className="item-container d-flex align-items-center">
                        <div className="image-container">
                            <div><img src={logo6} alt="logos" /></div>
                        </div>
                        <div className="content-container">
                            <h3 className="title ">Get an edge at interviews</h3>
                            <p className="description">Ace internship and placement interviews with your knowledge from the markets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="course-activities-section" className="section">
        <div className="container py-5">
            <h2 className="section-heading">How will your training work?</h2>
            <div className="d-flex flex-row flex-lg-column align-items-lg-center mx-auto">
                <div className="dashed-border">
                    <img className="d-block d-lg-none" src="static/images/icons/dotted_line_mobile.svg"  alt="line" />
                    <img className="d-none d-lg-block" src="static/images/icons/dotted_line_desktop.svg" alt="line" />
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-lg-center">
                                        <div className="item-container d-flex flex-lg-column align-items-center">
                        <div className="number-container">
                            <div className="number-box">1</div>
                            <div className="arrow-container">
                                <div className="arrow arrow-left"></div>
                                <div className="arrow arrow-right"></div>
                            </div>
                        </div>
                        <div className="content-container">
                            <p className="activity">Join us at our free webinar and sign up for the cohort programme.</p>
                        </div>
                    </div>
                                        <div className="item-container d-flex flex-lg-column align-items-center">
                        <div className="number-container">
                            <div className="number-box">2</div>
                            <div className="arrow-container">
                                <div className="arrow arrow-left"></div>
                                <div className="arrow arrow-right"></div>
                            </div>
                        </div>
                        <div className="content-container">
                            <p className="activity">Attend live classNamees on weekends and test your knowledge with quizzes.</p>
                        </div>
                    </div>
                                        <div className="item-container d-flex flex-lg-column align-items-center">
                        <div className="number-container">
                            <div className="number-box">3</div>
                            <div className="arrow-container">
                                <div className="arrow arrow-left"></div>
                                <div className="arrow arrow-right"></div>
                            </div>
                        </div>
                        <div className="content-container">
                            <p className="activity">Get hands-on examples and practice in the workshop.</p>
                        </div>
                    </div>
                                        <div className="item-container d-flex flex-lg-column align-items-center">
                        <div className="number-container">
                            <div className="number-box">4</div>
                            <div className="arrow-container">
                                <div className="arrow arrow-left"></div>
                                <div className="arrow arrow-right"></div>
                            </div>
                        </div>
                        <div className="content-container">
                            <p className="activity">Make your trading set-up and be a part of the discussion forum.</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </section>
    <section id="course-modules-and-topics-section" className="section background-alternate">
        <div className="container py-5">
            <h2 className="section-heading" >What will be the training syllabus?</h2>
            <div className="section-container mx-auto">
                <div className="modules-and-topics-wrapper">
                    <div className="modules-and-topics-container">
                        <div className="module-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#topics-container-collapse-1">
                            <div className="module w-100">
                                <h3 className="name">Investment basics and introduction to markets</h3>
                                <div className="info d-flex">
                                    <div className="no-of-topics d-flex">
                                        <img className="image" src={book} alt="books"/>
                                        <span className="content">4 Topics</span>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-arrow-container">
                                <i className="fa fa-angle-up-down"></i>
                            </div>
                        </div>
                        <div className="topics-container collapse " id="topics-container-collapse-1">
                            <div className="topics">
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">The need to invest</div>
                                </div>
                                                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Assets and related terminologies</div>
                                </div>
                                                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Stock Market Ecosystem</div>
                                </div>
                                                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Common market jargon</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="modules-and-topics-wrapper">
                    <div className="modules-and-topics-container">
                        <div className="module-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#topics-container-collapse-2">
                            <div className="module w-100">
                                <h3 className="name">The Trading Terminal</h3>
                                <div className="info d-flex">
                                    <div className="no-of-topics d-flex">
                                        <img className="image" src={book} alt="books" />
                                        <span className="content">4 Topics</span>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-arrow-container">
                                <i className="fa fa-angle-up-down"></i>
                            </div>
                        </div>
                        <div className="topics-container collapse " id="topics-container-collapse-2">
                            <div className="topics">
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Brokers, Exchanges and Clearance Corporations</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Types of orders</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Position sizing and leverage</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Using the trading terminal</div>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="modules-and-topics-wrapper">
                    <div className="modules-and-topics-container">
                        <div className="module-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#topics-container-collapse-3">
                            <div className="module w-100">
                                <h3 className="name">Introduction to Technical Analysis</h3>
                                <div className="info d-flex">
                                    <div className="no-of-topics d-flex">
                                        <img className="image" src={book} alt="books" />
                                        <span className="content">3 Topics</span>
                                    </div>
                                                                                                        </div>
                            </div>
                            <div className="collapse-arrow-container">
                                <i className="fa fa-angle-up-down"></i>
                            </div>
                        </div>
                        <div className="topics-container collapse " id="topics-container-collapse-3">
                            <div className="topics">
                                                                                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Different ways to analyse a stock</div>
                                </div>
                                                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Types of charts</div>
                                </div>
                                                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Candlesticks in technical analysis</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modules-and-topics-wrapper">
                    <div className="modules-and-topics-container">
                        <div className="module-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#topics-container-collapse-4">
                            <div className="module w-100">
                                <h3 className="name">Single Candlestick Patterns</h3>
                                <div className="info d-flex">
                                    <div className="no-of-topics d-flex">
                                        <img className="image" src={book} alt="books" />
                                        <span className="content">4 Topics</span>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-arrow-container">
                                <i className="fa fa-angle-up-down"></i>
                            </div>
                        </div>
                        <div className="topics-container collapse " id="topics-container-collapse-4">
                            <div className="topics">
                            <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Components of a technical chart</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Single candlestick patterns</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Analysing single candlestick patterns</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Components of a technical chart</div>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
                <div className="modules-and-topics-wrapper">
                    <div className="modules-and-topics-container">
                        <div className="module-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#topics-container-collapse-5">
                            <div className="module w-100">
                                <h3 className="name">Introduction to Price Action</h3>
                                <div className="info d-flex">
                                    <div className="no-of-topics d-flex">
                                        <img className="image" src={book} alt="books" />
                                        <span className="content">3 Topics</span>
                                    </div>         
                                </div>
                            </div>
                            <div className="collapse-arrow-container">
                                <i className="fa fa-angle-up-down"></i>
                            </div>
                        </div>
                        <div className="topics-container collapse " id="topics-container-collapse-5">
                            <div className="topics">
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Supports and Resistances on Techincal Charts</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Types of trends</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Drawing significant levels on a chart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modules-and-topics-wrapper">
                    <div className="modules-and-topics-container">
                        <div className="module-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#topics-container-collapse-6">
                            <div className="module w-100">
                                <h3 className="name">Multiple Candlestick Patterns</h3>
                                <div className="info d-flex">
                                    <div className="no-of-topics d-flex">
                                        <img className="image" src={book} alt="books" />
                                        <span className="content">2 Topics</span>
                                    </div>
                            </div>
                            </div>
                            <div className="collapse-arrow-container">
                                <i className="fa fa-angle-up-down"></i>
                            </div>
                        </div>
                        <div className="topics-container collapse " id="topics-container-collapse-6">
                            <div className="topics">
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Types of multiple candlestick patterns</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Analysing multiple candlestick patterns</div>
                                </div>
                          </div>
                      </div>
                </div>
            </div>
                <div className="modules-and-topics-wrapper">
                    <div className="modules-and-topics-container">
                        <div className="module-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#topics-container-collapse-7">
                            <div className="module w-100">
                                <h3 className="name">Technical Indicators</h3>
                                <div className="info d-flex">
                                    <div className="no-of-topics d-flex">
                                        <img className="image" src={book} alt="books" />
                                        <span className="content">2 Topics</span>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-arrow-container">
                                <i className="fa fa-angle-up-down"></i>
                            </div>
                        </div>
                        <div className="topics-container collapse " id="topics-container-collapse-7">
                            <div className="topics">
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">What are technical indicators</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Commonly used techincal indicators</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="modules-and-topics-wrapper">
                    <div className="modules-and-topics-container">
                        <div className="module-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#topics-container-collapse-8">
                            <div className="module w-100">
                                <h3 className="name">Analysing Technical Charts</h3>
                                <div className="info d-flex">
                                    <div className="no-of-topics d-flex">
                                        <img className="image" src={book} alt="books" />
                                        <span className="content">4 Topics</span>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-arrow-container">
                                <i className="fa fa-angle-up-down"></i>
                            </div>
                        </div>
                        <div className="topics-container collapse " id="topics-container-collapse-8">
                            <div className="topics">
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Using indicators on technical charts</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Common trading practices</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Making your personal trading setup</div>
                                </div>
                                <div className="topic d-flex align-items-center " >
                                    <div className="icon">
                                        <i className="fa fa-circle"></i>
                                    </div>
                                    <div className="name">Strategies for analyse a stock</div>
                                </div>
                          </div>
                      </div>
                </div>
            </div>  
        </div>
        </div>
    </section>
    <section id="course-projects-section" className="section background-alternate">
        <div className="container py-5">
            <h2 className="section-heading">What assignments will you work on?</h2>
            <div className="projects-container mx-auto">
                <div className="custom-carousel">
                    <div className="slider">
                          <div className="slider-item mx-auto">
                            <div className="project-card h-100">
                                <div className="header">
                                    <p className="name">Exclusive to your batch</p>
                                    <p className="title">Quizzes</p>
                                </div>
                                <div className="body">
                                    <p className="description">After every lecture, test your knowledge by participating in quizzes exclusive to your batch. Compete against friends to top the leaderboard.</p>
                                </div>
                            </div>
                        </div>
                                                <div className="slider-item mx-auto">
                            <div className="project-card h-100">
                                <div className="header">
                                    <p className="name">Daily rewards</p>
                                    <p className="title">Daily paid contests</p>
                                </div>
                                <div className="body">
                                    <p className="description">Put stock picking skills to use everyday. Participate in contests. Top 3 performers get rewards everyday.</p>
                                </div>
                            </div>
                        </div>
                                                <div className="slider-item mx-auto">
                            <div className="project-card h-100">
                                <div className="header">
                                    <p className="name">Merit quiz</p>
                                    <p className="title">Get recognised for merit</p>
                                </div>
                                <div className="body">
                                    <p className="description">Top performers from the daily contests (participants winning 30 coins or more) compete in a quiz to win merit rewards.</p>
                                </div>
                            </div>
                        </div>
                                                <div className="slider-item mx-auto">
                            <div className="project-card h-100">
                                <div className="header">
                                    <p className="name">Recognition of merit</p>
                                    <p className="title">Merit rewards</p>
                                </div>
                                <div className="body">
                                    <p className="description">Top 3 performers from the merit quiz get additional certificate of merit recognition and 100%, 50% and 25% refund of total fees based on performance rank.</p>
                                </div>
                            </div>
                        </div>
                      </div>
                    <div className="navigation-container  ">
                        <div className="navigation d-flex align-items-center justify-content-center">
                            <i className="fa fa-arrow-left control left disabled"  aria-hidden="true"></i>
                            <div className="indicators-container">
                                <div className='indicators d-flex'>
                                                                        <div className="indicator"></div>
                                                                        <div className="indicator"></div>
                                                                        <div className="indicator"></div>
                                                                        <div className="indicator"></div>
                                                                        <div className="indicator d-block d-lg-none"></div>
                                </div>
                                <div className="active-indicator"></div>
                            </div>
                            <i className="fa fa-arrow-right control right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="course-how-will-doubts-get-solved-section" className="section ">
        <div className="container py-5">
            <h2 className="section-heading" >How will your doubts get solved?</h2>
            <div className="item-container d-flex align-items-center mx-auto">
                <div className="image-container">
                    <i className="icons fas fa-comments"></i>
                </div>
                <div className="content-container">
                    <p className="content">You can post your doubts on the Q&A forum which will be answered by the teachers within 24 hours.</p>
                </div>
            </div>
        </div>
    </section>
        <section id="course-teachers-section" className="section">
        <div className="container py-5">
            <h2 className="section-heading">Who will be your mentors?</h2>
            <div className="teachers-container mx-auto">
                <div className="custom-carousel">
                    <div className="slider">
                                                <div className="slider-item mx-auto">
                            <div className="teacher-card h-100 text-center">
                                <div className="image-wrapper w-100">
                                    <div className="image-container mx-auto">
                                        <img className="lazy-load" alt="profile" src ={karthik}  />
                                    </div>
                                </div>
                                <div className="teacher-info h-100">
                                    <div className="name-and-designation-container">
                                        <h3 className="name">K. Sai Karthik</h3>
                                        <h6>Experience in markets : 5+ years</h6>
                                    </div>
                                    <div className="separator mx-auto"></div>
                                    <div className="about-info-container">
                                        <p className="about-info">Founder, Trademanza. <br/> Karthik has worked in an offline brokerage firm and a financial advisory in the past. He was also an ace negotiator handling key contracts in supply chain.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-item mx-auto">
                            <div className="teacher-card h-100 text-center">
                                <div className="image-wrapper w-100">
                                    <div className="image-container mx-auto">
                                        <img className="lazy-load" alt="profile" src = {skand} />
                                    </div>
                                </div>
                                <div className="teacher-info h-100">
                                    <div className="name-and-designation-container">
                                        <h3 className="name">Skand Gupta</h3>
                                        <h6>Experience in markets : 3+ years</h6>
                                    </div>
                                    <div className="separator mx-auto"></div>
                                    <div className="about-info-container">
                                        <p className="about-info">Strategy, Trademanza. <br/> Skand is one of the founding members and current President of FinWiz, the finance club at NITW. His experience in markets comes across various securities with special focus on equities and derivatives. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            </div>
                    <div className="navigation-container  d-none">
                        <div className="navigation d-flex align-items-center justify-content-center">
                            <i className="fa fa-arrow-left control left disabled" aria-hidden="true"></i>
                            <div className="indicators-container">
                                <div className='indicators d-flex'>
                                                                        <div className="indicator"></div>
                                                                        <div className="indicator d-block d-lg-none"></div>
                                </div>
                                <div className="active-indicator"></div>
                            </div>
                            <i className="fa fa-arrow-right control right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    <section id="course-faq-section" className="section background-alternate">
    <div className="container py-5">
        <div className="faq-container mx-auto">
            <div className="faq-btn-container d-flex justify-content-center mb-4">
                <button className="faq-btn collapsed"  data-toggle="collapse" data-target="#faqs-content-container">
                    Have more questions?
                    <span className="collapse-arrow-container ml-2">
                            <i className="fa fa-angle-up-down"></i>
                        </span>
                </button>
            </div>
            <div id="faqs-content-container" className="faqs-content-container collapse">
                <div className="heading text-center" >Contact us at trademanzahelp@gmail.com</div>
                    <div className="category-container">
                        <div className="category-wrapper">
                            <div className="category d-flex align-items-center collapsed" data-toggle="collapse" data-target="#faqs-questions-container-training">
                                <p className="category-title" > Training Prerequisites</p>
                                <p className="collapse-arrow-container ml-auto"><i className="fa fa-angle-up-down"></i> </p>
                            </div>
                            <div id="faqs-questions-container-training" className="questions-container collapse" data-parent="#faqs-content-container-training">
                                    <div className="question-answer-container">
                                        <div className="question-answer-wrapper">
                                            <div className="question-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#faqs-answer-container-training-0">
                                                <p className="question">Q. What are the prerequisites for the training? </p>
                                                <p className="collapse-arrow-container ml-auto">
                                                    <i className="fa fa-angle-up-down"></i>
                                                </p>
                                            </div>
                                            <div id="faqs-answer-container-training-0" className="answer-container collapse" data-parent="#faqs-questions-container-training-0">
                                                <p className="answer">There are no prerequisites for this training as it is of beginner level. Everything that you need to know about Stocks, Trading and Investing would be taught to you from scratch.</p>
                                            </div>
                                        </div>
                                    </div>
                                                                    <div className="question-answer-container">
                                        <div className="question-answer-wrapper">
                                            <div className="question-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#faqs-answer-container-training-1">
                                                <p className="question">Q. What software/tools would be needed for the training and how can I get them? </p>
                                                <p className="collapse-arrow-container ml-auto">
                                                    <i className="fa fa-angle-up-down"></i>
                                                </p>
                                            </div>
                                            <div id="faqs-answer-container-training-1" className="answer-container collapse" data-parent="#faqs-questions-container-training-1">
                                                <p className="answer">All the software/tools that you need for the training would be shared with you during the training as and when you need it. All of them shall be free.</p>
                                            </div>
                                        </div>
                                    </div>
                                                                    <div className="question-answer-container">
                                        <div className="question-answer-wrapper">
                                            <div className="question-container d-flex align-items-center collapsed" data-toggle="collapse" data-target="#faqs-answer-container-training-2">
                                                <p className="question">Q. Do I need to have a laptop or desktop to do the training or can I do it on mobile too? </p>
                                                <p className="collapse-arrow-container ml-auto">
                                                    <i className="fa fa-angle-up-down"></i>
                                                </p>
                                            </div>
                                            <div id="faqs-answer-container-training-2" className="answer-container collapse" data-parent="#faqs-questions-container-training-2">
                                                <p className="answer">You can watch the videos, take quizzes, tests, do assignments, and practice on any device including mobile and complete the training. Laptops help with analysis of stocks although they are not mandatory.</p>
                                            </div>
                                        </div>
                                    </div>
                              </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    
</section>
    <div className="modal transparent fade" id="certificate-modal">
        <div className="modal-dialog modal-dialog-centered justify-content-center modal-lg">
            <div className="modal-content border-0">
                <div className="close-btn d-flex justify-content-end">
                    <i className="fa fa-close ml-auto" data-dismiss="modal"></i>
                </div>
                <div className="certificate-image-container">
                    <div className="pinch">
                        <img className="image" src="cached_uploads/business-communication-skills/signup_page_media/certificate.png" alt="certificate" id="certificate-image-modal" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal transparent fade" id="demo-video-modal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content mx-auto border-0">
                <div className="demo-video-content-container">
                    <div className="close-btn d-flex justify-content-end">
                        <i className="fa fa-close ml-auto" data-dismiss="modal"></i>
                    </div>
                    <div className="demo-video-container w-100 h-100">
                        <iframe id="vimeo-video" src=""  title="video" frameborder="0" allow="autoplay; autopause;"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="modal fade" id="info-modal" tabindex="-1" role="dialog" aria-labelledby="error-modal" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="container">
                            <div className="row" id = "info-modal-body"></div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger err-button" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="info-success-modal" tabindex="-1" role="dialog" aria-labelledby="success-modal" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="container">
                            <div className="row" id = "info-success-modal-body"></div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary success-button" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
    );
  }
}
export default Trainings;