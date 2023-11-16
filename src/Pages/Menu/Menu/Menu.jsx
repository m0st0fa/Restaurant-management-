

import { Helmet } from 'react-helmet-async';
import Cover from '../../Home/Shared/Cover/Cover';
import menuImg from '../../../../assets/menu/banner3.jpg'
import dessertImg from '../../../../assets/menu/dessert-bg.jpeg'
import shopImg from '../../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category.toLowerCase() === 'dessert');
    const soup = menu.filter(item => item.category.toLowerCase() === 'soup');
    const salad = menu.filter(item => item.category.toLowerCase() === 'salad');
    const pizza = menu.filter(item => item.category.toLowerCase() === 'pizza');
    const offered = menu.filter(item => item.category.toLowerCase() === 'offered');
    

    // dessert
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover title="Our Menu" img={menuImg}> </Cover>
            {/* main cover  */}
              <SectionTitle subHeading={"do not miss this "} heading={"Today Offers"}> </SectionTitle>
              {/* offered menu items  */}
              <MenuCategory items={offered} title="offered"></MenuCategory>
              {/* dessert menu items */}
              <MenuCategory items={desserts} img={dessertImg} title="dessert"></MenuCategory>
              {/* pizza menu items */}
              <MenuCategory items={pizza} img={pizzaImg} title="pizza"></MenuCategory>
              {/*salad menu items */}
              <MenuCategory items={salad} img={saladImg} title="salad"></MenuCategory>
              {/* soup menu items   */}
              <MenuCategory items={soup} img={shopImg} title="soup"></MenuCategory>




        </div>
    );
};

export default Menu;