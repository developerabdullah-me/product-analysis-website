import React from 'react';
import useComment from '../Hooks/Hooks';
import SingelReview from '../SingelReview/SingelReview';

const Reveiw = () => {
    const [comments,setComment]=useComment();
    return (
        <div>
          {
              comments.map(comment => <SingelReview comment={comment}></SingelReview>)
          }
           
        </div>
    );
};

export default Reveiw;