import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { typeAPI } from '../../api/typeAPI';
import { Iredusers } from '../../redux/reducers/rootReducer';
import CastFilms from '../CastFilm/CastFilm';
import { Link } from 'react-router-dom';
import { getDiscoverRequest } from '../../redux/reducers/reduceFilm/action/actions';

export const DetailItemInfo: React.FC<{ detailflim: typeAPI.MovieItem }> = ({detailflim}) => {
  const params = useSelector<Iredusers>(state => state.films.params)
  const dispatch = useDispatch()
  
  const handleGenre = useCallback((id:number,params) => {
    dispatch(getDiscoverRequest({...params,page:1,with_genres:id})) 
  }, [dispatch])

  return (
    <div className="col-md-8 col-sm-12 col-xs-12">
      <div className="movie-single-ct main-content">
        <h1 className="bd-hd">{detailflim.title}</h1>

        <div className="social-btn">
          	
        </div>

        <div className="movie-rate">
          <div className="rate">
            <i className="ion-android-star"></i>
              <p><span>{detailflim.vote_average}</span> /10
              <br/>
                  <span className="rv">
                   {detailflim.vote_count} Reviews
                  </span>
            </p>
          </div>
          <div className="rate-star">
            <p>Дата релиза:  </p>
            <p>{detailflim.release_date}</p> 
          </div>
        </div>

        <div className="movie-tabs">
            <div className="tabs">
              <ul className="tab-links tabs-mv">
                <li className="active"><a href="#overview">Overview</a></li>                       
              </ul>
            </div>
        </div> 

        <div className="tab-content">
          <div id="overview" className="tab active">
            <div className="row">
              <div className="col-md-8 col-sm-12 col-xs-12">
                <p>{detailflim.overview}</p>
                <div className="title-hd-sm">
                    <h4>Актеры</h4>
                    
                </div>  
                <div className="mvcast-item">
                  <CastFilms casts={detailflim.cast} /> 
                    
                </div>   
              </div>

              <div className="col-md-4 col-xs-12 col-sm-12">
                <div className="sb-it">
                  <h6>Бюджет: </h6>
                  <p><a>{detailflim.budget}</a></p>
                </div>
                <div className="sb-it">
                          <h6>Длительность: </h6>
                          <p>{detailflim.runtime} m</p>
                        </div>
                        <div className="sb-it">
                          <h6>Жанр: </h6>
                          <p>{detailflim.genres && detailflim.genres.map((val:{id:number,name:string}) => {
                              return <Link key={val.id} to='/' onClick={e => handleGenre(val.id,params)}>{val.name}, </Link>        
                           })}</p>
                        </div>
              </div>  

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}