import React from 'react';
import Rating from 'react-rating';
import { AiFillStar } from 'react-icons/ai';
import {BsStarHalf } from 'react-icons/bs';
const SingleReviewHome = (props) => {
    const {name,review,picture}=props.comment;
    return (
        <div>
            <div className="mt-5">
            <div className=" w-96 shadow-lg mx-auto p-3 ">
            <div className="flex items-center mx-5">
                <img className="w-20 h-20 rounded-full" src={picture} alt="" />
              <h1  className="text-2xl font-bold">{name}</h1>
            </div>
            <p>{review}</p>
            <Rating
    initialRating={3.5}
    emptySymbol={<BsStarHalf style={{color: 'goldenrod'}}/>}
    fullSymbol={<AiFillStar style={{color: 'goldenrod'}}/>}
    readonly
></Rating>
            </div>
        </div>
        </div>
    );
};

export default SingleReviewHome;