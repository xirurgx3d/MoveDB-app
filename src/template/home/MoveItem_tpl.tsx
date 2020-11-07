import React from 'react';

interface Iprop{
    left:any,
    right:any
}
const MoveItemTpl:React.FC<Iprop> = (props) => (
    <div className="movie-items  full-width">
      <div className="row">
        <div className="col-md-9 col-sm-12 col-xs-12">
            {props.left}
        </div>
        <div className="col-md-3 col-sm-12 col-xs-12">
            {props.right}
        </div>
     </div>
    </div>
)
export default MoveItemTpl