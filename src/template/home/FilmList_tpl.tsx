import React from 'react';

const FilmListTpl:React.FC = (props) => (
    <div className="tab-content">
        <div className="row">
			<div className="flex-wrap-movielist">
                {props.children}
            </div>
       </div>
    </div>
)
export default FilmListTpl