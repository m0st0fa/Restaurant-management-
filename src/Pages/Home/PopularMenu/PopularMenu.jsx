import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../Shared/MenuItem/MenuItems";


const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('Menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)})
    },[])
    console.log(menu)
    return (
        <section className="text-center mt-10 mb-10">
            <SectionTitle
            heading={'Check it out'}
            subHeading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid md: grid-cols-2 gap-3 p-4">
               {
                menu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
               }
            </div>   
            <button className="btn btn-outline ">view all</button>
    
        </section>
    );
};

export default PopularMenu;