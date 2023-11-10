
const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className=" md:w-3/12 mx-auto">
            <p className="text-yellow-600 font-medium">{heading}</p>
            <h1 className="text-yellow-700 text-4xl font-bold border-y-4 py-4">{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;