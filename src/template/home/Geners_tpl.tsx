import React from 'react';

const GenersTpl:React.FC = (props) => (
    <div className="sidebar">
        <div className="sb-cate sb-it">
            <h4 className="sb-title">Категории</h4>
			{props.children}
       </div>
    </div>
)
export default GenersTpl