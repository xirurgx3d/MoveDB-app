import React, { ReactNode } from 'react';

const DetailTpl:React.FC<{children:ReactNode}> = ({children}) => (
  <div className="page-single movie-single movie_single">
	  <div className="container">
      <div className="row ipad-width2">
          {children}
      </div>
    </div>
  </div>
)
export default DetailTpl