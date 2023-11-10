import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            <section className='text-center mt-10'>
                <SectionTitle
                heading={"From 11:00am to 10:00pm"}
                subHeading={"ORDER ONLINE"}
                
                ></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                        <h1 className='-mt-12 uppercase text-3xl text-center text-white'>Salad</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        <h1 className='-mt-12 uppercase text-3xl text-center text-white'>Soups</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        <h1 className='-mt-12 uppercase text-3xl text-center text-white'>pizzas</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h1 className='-mt-12 uppercase text-3xl text-center text-white'>Brad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        <h1 className='-mt-12 uppercase text-3xl text-center text-white'>Cake</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        <h1 className='-mt-12 uppercase text-3xl text-center text-white'>desserts</h1>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;