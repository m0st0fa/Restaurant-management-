
const MenuItems = ({item}) => {
    const {name,recipe,image,price} = item;
    return (
        <div className="flex items-center justify-center space-x-4">
            <img className="w-20 rounded-full " src={image} alt="" />
            <div>
                <h3 className="text-3xl font-bold text-white"> <span className="text-3xl font-bold text-yellow-300">Name</span>: {name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 ">price:{price}$</p>
        </div>
    );
};

export default MenuItems;