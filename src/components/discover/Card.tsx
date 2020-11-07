import React from 'react';
import { Link } from "react-router-dom";

interface Icard {
    discover:any
}

const Card:React.FC<Icard> = (props) => {
    
    const {discover} = props
    
    return (
        <>
        {
            discover.map((value:any, index:number) => {
                console.log(value)
                return (
                    <div key={index} className="slide-it">
                        <div className="movie-item">
                            <div className="mv-img">
                                <img src={"https://image.tmdb.org/t/p/w342/" + value.poster_path } alt=""/>
                            </div>
                            <div className="hvr-inner">
                                <Link to={`film-detail/${value.id}`}> Read more <i className="ion-android-arrow-dropright"></i> </Link>
                            </div>
                            <div className="title-in">
                                <h6><a href="#">{value.title}</a></h6>
                                <p><i className="ion-android-star"></i><span>{value.vote_average}</span> /10</p>
                            </div>
                        </div>
                    </div> 
                )
            })
        }
        </>
    )
}
export default Card

/* https://image.tmdb.org/t/p/w342/
{
                    discover.map((value:any, index) => {
                        return (<li key={index}>
                            <Link to={`film-detail/${value.id}`}>
                                <h2>{value.title}</h2>
                            </Link>
                            
                        </li>)
                    })
                }

*/

/**
 * <div className="slide-it">
                        <div className="movie-item">
                            <div className="mv-img">
                                <img src="images/uploads/mv-it2.jpg" alt=""/>
                            </div>
                            <div className="hvr-inner">
                                <a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                            </div>
                            <div className="title-in">
                                <h6><a href="#">The revenant</a></h6>
                                <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                            </div>
                        </div>
                    </div> 
 */
