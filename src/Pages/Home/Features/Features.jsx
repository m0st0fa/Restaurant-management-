import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImG from '../../../assets/home/featured.jpg'
// import bannerImg from '../../../assets/home/featured.jpg'
import './Features.css'


const Features = () => {
    return ( 
        <div className="feature-item text-white pt-8 my-20">
            <section className="text-center">
                <SectionTitle
                    heading={'Check it out'}
                    subHeading={'FROM OUR MENU'}

                ></SectionTitle>
                <div className=" md:flex  justify-center py-20 px-36 pb-20 pt-12 items-center ">
                    <div>
                        <img src={featureImG} alt="" />
                    </div>
                    <div className=" md:ml-10 justify-center">
                        <p>March 20, 2023</p>
                        <p className=" uppercase">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amat consectetur adipisicing elia. Error volute facer, desert dolores maigres quod nobs quad quasi. Ease repellant recusance ad laudanum tempore consecrator consequent ornis lula maxim tenter</p>
                        <button className="btn btn-outline ">Order Now</button>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Features;