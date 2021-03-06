import React from 'react';
import { useNavigate } from 'react-router-dom';
import useComment from '../Hooks/Hooks';
import SingleReviewHome from '../SingleReviewHome/SingleReviewHome';

const Home = () => {
    const [comments,setComment]=useComment();
    const navigete=useNavigate()
    return (
        <div className="">
 <div  className=" grid md:grid-cols-2 items-center justify-items-end px-10 py-10  sm:grid-cols-1">
            <div className="">
                <h1 className="text-5xl font-bold">
               <span className="text-amber-300">Teclast F7S </span>
                 Windows 10 Intel Apollo
                </h1>
                <p>Basic Information Brand: Teclast Model: F7S    Material of back cover: Metal OS: Windows 10 CPU:Intel Apollo Lake N3350 Graphics Chipset: Intel HD Graphics 500 Storage RAM: 8GB ROM: 128GB Storage Expansion: Micro SD card and SSD (not included) Network Bluetooth: 4.0 LAN Card: No Support Network: Dual WiFi 2.4GHz/5.0GHz,WiFi WIFI: 802.11 ac WLAN Card: Yes Display Screen type: FHD,IPS Screen size: 14.1 inch Display Ratio: 16:9 Screen resolution: 1920 x 1080 (FHD) Camera Camera type: Single camera Fro</p>
            </div>
            <div className="">
          <img className="shadow-lg" src="laptop.png" alt="" />
            </div>
        </div>
            <div className="">
            <h1 className='text-5xl font-bold text-amber-300'>Customer Review (3)</h1>
                {
                    comments.slice(0,3).map(comment => <SingleReviewHome
                        key="comment.id"
                        comment={comment}></SingleReviewHome>)
                }
                  <button onClick={() =>navigete(`/review`)} className="bg-amber-300 font-bold px-5 py-2 rounded-md">See All Review</button>
            </div>
        </div>
       
    );
};

export default Home;