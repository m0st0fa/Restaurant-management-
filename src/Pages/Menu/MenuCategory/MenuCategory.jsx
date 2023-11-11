import Cover from "../../Home/Shared/Cover/Cover";
import MenuItems from "../../Home/Shared/MenuItem/MenuItems";
const MenuCategory = ({ items, title, img }) => {

    return (
        <div className="pt-8">
            {title && <Cover title="Our Menu Image Is Here" img={img}> </Cover>}
            <div className="grid md: grid-cols-2 gap-3 p-4 mt-16">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;