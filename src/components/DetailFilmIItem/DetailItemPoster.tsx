import React from "react";
import { typeAPI } from "../../api/typeAPI";
import { URL } from "../../redux/reducers/reduceFilm/constants/constants";

export const DetailItemPoster: React.FC<{ detailflim: typeAPI.MovieItem }> = ({
  detailflim,
}) => {
  return (
    <div className="col-md-4 col-sm-12 col-xs-12">
      <div className="movie-img sticky-sb">
        <img src={URL + detailflim.poster_path} alt="" />
        <div className="movie-btn">
          <div className="btn-transform transform-vertical red">
            {
              detailflim.video &&
              < div >
                <a href="#" className="item item-1 redbtn">
                  {" "}
                  <i className="ion-play"></i> Watch Trailer
                </a>
              </div>
            }
            
          </div>
          <div className="btn-transform transform-vertical">
            <div>
              <a href={detailflim.homepage} className="item item-1 yellowbtn">
                Перейти
              </a>
            </div>
            <div>
              <a href={detailflim.homepage} className="item item-2 yellowbtn">
                  Перейти на сайт
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
