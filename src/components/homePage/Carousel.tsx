import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState } from 'react';
import { ThemeContext } from "../lib/context/ThemeContext";
import { useContext } from "react";
import FavouriteButton from '../favorite/Favorite';

interface Props{
    data ?: any
}

export function Caraousel({...prop} : Props){
    
    let theme = useContext(ThemeContext)

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (e:any) => {
      setActiveIndex(e.activeIndex);
    };

    return(
        <div>
        <div className={`${theme.background4} background-animate w-full`}>  
        <div className={`flex items-center justify-center font-semibold text-white p-6 mb-4 ${theme.background1} w-full sm:text-6xl text-xl`}>{prop.data.artist.name}'s Album</div>
             <Swiper
             effect={'coverflow'}
             grabCursor={true}
             centeredSlides={true}
             loop ={false}
             slidesPerView={3}
             coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5
             }}

             pagination ={{
                el:'.swiper-pagination', 
                enabled:true}}
             navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                enabled: true
             }}
             modules={[EffectCoverflow, Pagination, Navigation]}
             
             className='swiper_container w-full h-full'
             onSlideChange={handleSlideChange}
             >
             {prop.data.artist.albums.map((media :any) => (  
                <SwiperSlide>
                        <div className={`container ${theme.background8} bg-opacity-70 rounded-xl`}>
                            <div className='flex-col flex justify-center items-center'>
                                <img src = {media.image} alt=" " className='flex justify-center items-center w-5/6 h-5/6 rounded-xl mt-4'/>
                                    <div className='font-semibold text-3xl flex justify-center w-5/6 h-2/6'>
                                        <div className={`overflow-auto ${theme.text} sm:text-3xl text-xs sm:h-20 h-8 sm:m-4 m:2`}>{media.name}</div>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                ))}
                <div className="slider-controller mt-9">
                    <div className="swiper-button-prev slider-arrow">
                    </div>
                    <div className="swiper-button-next slider-arrow">
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
             </Swiper>
        </div>
            <div className={`flex flex-col max-h-screen w-full overflow-scroll ${theme.background6}`}>
                <div className={`m-4 p-4 flex text-xl sm:text-2xl items-center justify-center font-medium text-white ${theme.background1} rounded-xl`}>{prop.data.artist.albums[activeIndex].name + "'s Tracklist"}</div>
                {prop.data.artist.albums[activeIndex].tracks.map((track:any,index:any) => (
                    <div className={`flex h-3/6 ${theme.background7} bg-opacity-40 rounded-3xl p-2 m-4`}>
                        <div className="flex flex-row">
                        <div className="flex text-2xl sm:text-4xl items-center justify-center font-medium text-white m-4">{index + 1 +"."}</div>
                            <div className='flex items-center justify-center h-20 w-20 m-4'>
                                <img src = {prop.data.artist.albums[activeIndex].image} alt="" className='flex-1 w-full'></img>
                            </div>
                            <div className="flex w-full text-lg sm:text-2xl items-center justify-center font-medium text-white overflow-auto mr-2">{track.name}</div>
                            <FavouriteButton artist ={prop.data.artist.name} album={prop.data.artist.albums[activeIndex].name} track={track.name} />
                        </div>   
                    </div>
                ))}
                <div className='flex h-16 m-14 bg-transparent'></div>
                <div className='flex h-16 m-14 bg-transparent'></div>
                

            </div>
        </div>
    )
}