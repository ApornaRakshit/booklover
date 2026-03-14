import React from 'react';
import bookImg from "../../assets/books.jpg";

const Banner = () => {
    return (
        <div className='w-full flex justify-between items-center p-8'>
            <div>
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                <button className='btn btn-primary mt-2'>Test Button</button>
            </div>
            <div className='w-4/12'>
                <img src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;