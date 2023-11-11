
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItems from "../Shared/MenuItem/MenuItems";


const PopularMenu = () => {
const [menu] = useMenu()
const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="text-center mt-10 mb-10">
            <SectionTitle
            heading={'Check it out'}
            subHeading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid md: grid-cols-2 gap-3 p-4">
               {
                popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
               }
            </div>   
            <button className="btn btn-outline ">view all</button>
    
        </section>
    );
};

export default PopularMenu;