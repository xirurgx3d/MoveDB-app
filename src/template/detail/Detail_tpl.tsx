import React from 'react';

const DetailTpl:React.FC = (props) => (
  <div className="page-single movie-single movie_single">
	  <div className="container">
      <div className="row ipad-width2">

        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className="movie-img sticky-sb">
            <img src="images/uploads/movie-single.jpg" alt=""/>
            <div className="movie-btn">	
              <div className="btn-transform transform-vertical red">
                <div><a href="#" className="item item-1 redbtn"> <i className="ion-play"></i> Watch Trailer</a></div>
                    <div><a href="https://www.youtube.com/embed/o-0hcF97wy0" className="item item-2 redbtn fancybox-media hvr-grow">
                      <i className="ion-play"></i>
                    </a>
                    </div>
              </div>
              <div className="btn-transform transform-vertical">
                    <div><a href="#" className="item item-1 yellowbtn">
                      <i className="ion-card"></i> Buy ticket</a>
                    </div>
                    <div><a href="#" className="item item-2 yellowbtn">
                      <i className="ion-card"></i>
                    </a>
                    </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8 col-sm-12 col-xs-12">
          <div className="movie-single-ct main-content">
            <h1 className="bd-hd">Skyfall: Quantum of Spectre <span>2015</span></h1>

            <div className="social-btn">
              <a href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
              <div className="hover-bnt">
                <a href="#" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
                <div className="hvr-item">
                  <a href="#" className="hvr-grow"><i className="ion-social-facebook"></i></a>
                  <a href="#" className="hvr-grow"><i className="ion-social-twitter"></i></a>
                  <a href="#" className="hvr-grow"><i className="ion-social-googleplus"></i></a>
                  <a href="#" className="hvr-grow"><i className="ion-social-youtube"></i></a>
                </div>
              </div>		
            </div>

            <div className="movie-rate">
              <div className="rate">
                <i className="ion-android-star"></i>
                  <p><span>8.1</span> /10
                  <br/>
                      <span className="rv">
                        56 Reviews
                      </span>
                </p>
              </div>
              <div className="rate-star">
                <p>Rate This Movie:  </p>
                <i className="ion-ios-star"></i>
                <i className="ion-ios-star"></i>
                <i className="ion-ios-star"></i>
                <i className="ion-ios-star"></i>
                <i className="ion-ios-star"></i>
                <i className="ion-ios-star"></i>
                <i className="ion-ios-star"></i>
                <i className="ion-ios-star"></i>
                <i className="ion-ios-star-outline"></i>
              </div>
            </div>

            <div className="movie-tabs">
                <div className="tabs">
                  <ul className="tab-links tabs-mv">
                    <li className="active"><a href="#overview">Overview</a></li>
                    <li><a href="#reviews"> Reviews</a></li>
                    <li><a href="#cast">  Cast & Crew </a></li>
                    <li><a href="#media"> Media</a></li> 
                    <li><a href="#moviesrelated"> Related Movies</a></li>                        
                  </ul>
                </div>
            </div> 

            <div className="tab-content">
						  <div id="overview" className="tab active">
                <div className="row">
                  <div className="col-md-8 col-sm-12 col-xs-12">
                    <p>Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.</p>
						        <div className="title-hd-sm">
												<h4>cast</h4>
												<a href="#" className="time">Full Cast & Crew  <i className="ion-ios-arrow-right"></i></a>
                    </div>  
                    <div className="mvcast-item">											
												<div className="cast-it">
													<div className="cast-left">
														<img src="images/uploads/cast1.jpg" alt=""/>
														<a href="#">Robert Downey Jr.</a>
													</div>
													<p>...  Robert Downey Jr.</p>
                        </div>
                     </div>   
                  </div>

                  <div className="col-md-4 col-xs-12 col-sm-12">
						        <div className="sb-it">
						          <h6>Director: </h6>
						          <p><a href="#">Joss Whedon</a></p>
                    </div>
                    <div className="sb-it">
						            			<h6>Writer: </h6>
						            			<p><a href="#">Joss Whedon,</a> <a href="#">Stan Lee</a></p>
						            		</div>
						            		<div className="sb-it">
						            			<h6>Stars: </h6>
						            			<p><a href="#">Robert Downey Jr,</a> <a href="#">Chris Evans,</a> <a href="#">Mark Ruffalo,</a><a href="#"> Scarlett Johansson</a></p>
						            		</div>
                  </div>  

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
)
export default DetailTpl