import React from 'react';
import { URL } from '../../redux/reducers/reduceFilm/constants/constants';

const DetailHeadTpl: React.FC<{bgpic:string}> = (props) => (
  
  <div className="hero mv-single-hero" style={{backgroundImage:`url(${URL + props.bgpic})` }}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          
        </div>
      </div>
    </div>
  </div>
)
export default DetailHeadTpl