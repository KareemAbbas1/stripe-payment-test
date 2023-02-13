import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const KEY = "pk_test_51MagDJDrl8npF6c37b4XGiUJNisTulqBtjItlmqYO6TVr6O6VhTHklwLDfuBwsNTyU7C4Ydoy4zdwBnZWB7tz3TV00lyIOo8s9";

const Payment = () => {


    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    };


    useEffect(() => {
        const makeRequest = async () => {

            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/stripe-payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000
                    }
                );
                console.log(res.data);
                navigate("/success" /*, {res.data}*/);
            } catch (err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest();
    }, [stripeToken, history]);

    return (
        <div>
            {stripeToken ? (
                <span>Processing. Please wait...</span>
            ) : (

                <StripeCheckout
                    name="Roco e-Commerce"
                    image='https://via.placeholder.com/150 '
                    billingAddress
                    shippingAddress
                    description=" Your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button style={{
                        background: "#000",
                        color: "#fff",
                        width: "10rem",
                        height: "4rem",
                        fontSize: "1.5rem",
                        cursor: "pointer"
                    }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            )}
        </div>
    )
};


export default Payment;