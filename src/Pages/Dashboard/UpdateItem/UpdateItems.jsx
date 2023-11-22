import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";



const UpdateItems = () => {
  const items = useLoaderData()
  console.log(items)
    return (
        <div>
            <SectionTitle heading='Update Items' subHeading="Refresh Items"></SectionTitle>
           <h1>hello world</h1>
          
        </div>
    );
};

export default UpdateItems;