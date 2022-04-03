import React from 'react';
import { useNavigate } from 'react-router-dom';
import useComment from '../Hooks/Hooks';

const Home = () => {
    const [comments,setComment]=useComment();
    const navigete=useNavigate()
    return (
        <div className="">
 <div  className=" grid grid-cols-2 items-center justify-items-end px-10 py-10">
            <div className="">
                <h1 className="text-5xl font-bold">
               <span className="text-amber-300">Teclast F7S </span>
               Laptop Windows 10 Intel Apollo
                </h1>
                <p>Basic Information Brand: Teclast Model: F7S Material of back cover: Metal OS: Windows 10 CPU:Intel Apollo Lake N3350 Graphics Chipset: Intel HD Graphics 500 Storage RAM: 8GB ROM: 128GB Storage Expansion: Micro SD card and SSD (not included) Network Bluetooth: 4.0 LAN Card: No Support Network: Dual WiFi 2.4GHz/5.0GHz,WiFi WIFI: 802.11 ac WLAN Card: Yes Display Screen type: FHD,IPS Screen size: 14.1 inch Display Ratio: 16:9 Screen resolution: 1920 x 1080 (FHD) Camera Camera type: Single camera Fro</p>
            </div>
            <div className="">
          <img className="shadow-lg" src="laptop.png" alt="" />
            </div>
        </div>
            <div className="">
            <h1 className='text-5xl font-bold text-amber-300'>Customer Review</h1>
                {
                    comments.slice(0,3).map(comment => <div>
                       <h1>{comment.name}</h1>
                     
                    </div>)
                }
                  <button onClick={() =>navigete(`/review`)} className="bg-amber-300">see all review</button>
            </div>
        </div>
       
    );
};

export default Home;