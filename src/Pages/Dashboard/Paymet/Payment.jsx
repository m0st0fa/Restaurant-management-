import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
// TODO: Publish key later 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Pay fast to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise} >
                   <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;