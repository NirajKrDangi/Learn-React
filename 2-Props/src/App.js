import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';


export default function App() {
    let cardImg1 = 'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    let cardImg2 = 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    let cardImg3 = 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    return (
        <>
            <Navbar />
            <div className='flex justify-center items-center flex-row flex-wrap mt-2'>
                <Card img={cardImg1} CardName="Anjlina" btn="Read More" />
                <Card img={cardImg2} CardName="Julli" btn="Learn More" />
                <Card img={cardImg3} CardName="Marina" btn="See More" />
            </div>
        </>
    )
}
