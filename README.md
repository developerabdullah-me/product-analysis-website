
# Special Notes
# React rating demo: https://dreyescat.github.io/react-rating/

##### npm install recharts --force

##### npm install --save react-rating

##### npm install react-icons --save

- this a laptop review web site
- home page show product 
- review page show review product 
- dashbort show chart 

<code>
        import Rating from 'react-rating';
        import { AiFillStar } from 'react-icons/ai';
        import {BsStarHalf } from 'react-icons/bs';

     <Rating
    initialRating={3.5}
    emptySymbol={<BsStarHalf style={{color: 'goldenrod'}}/>}
    fullSymbol={<AiFillStar style={{color: 'goldenrod'}}/>}
    readonly
></Rating>
</code>