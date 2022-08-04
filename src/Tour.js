import React, { useState } from 'react';

const Tour = ({id,name,image,price,info,removeTour}) => {
  const [readMore,setReadMore] = useState(false);
  return <article className='single-tour'>
    <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
        <h4>${price}</h4>
        </div>
        <p>{readMore?info:`${info.substring(0,100)}...`}
        <button onClick={()=>setReadMore(!readMore)}>{readMore?`Show less`:`Read more`}</button>
        </p>
        <button className='delete-btn' onClick={()=>removeTour(id)}>Not Interested</button>
      </footer>
  </article>;
};

export default Tour;
