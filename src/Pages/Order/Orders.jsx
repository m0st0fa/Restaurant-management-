
import { useState } from 'react';
import orderIMG from '../../../assets/shop/banner2.jpg'
import Cover from '../Home/Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTabs from './OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useMenu from '../../Hooks/useMenu';

const Orders = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams() 
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()

    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')



    return (
        <div>
            <Helmet>
                <title>Order</title>
            </Helmet>
            <Cover img={orderIMG} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza </Tab>
                    <Tab>soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <OrderTabs items={pizza}></OrderTabs>
                <TabPanel>
                    <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={dessert}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Orders;