import { Link } from "react-router-dom";
import Cover from "../../Home/Shared/Cover/Cover";
import MenuItems from "../../Home/Shared/MenuItem/MenuItems";
const MenuCategory = ({ items, title, img }) => {

    return (
        <div className="pt-8">
            { title && <Cover title={title} img={img}> </Cover>}
            <div className="grid md: grid-cols-2 gap-3 p-4 mt-16">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div>
                <Link className="btn btn-outline border-0 border-b-4 mt-4" to={`/order/${title}`}>Order</Link>
            </div>
        </div>
    );
};

export default MenuCategory;