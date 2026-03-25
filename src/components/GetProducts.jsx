import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// useEffect==used to run side effects
// to avoid refreshing the browser manually
// puting empty dependencies===when we always need a new category to make sure it runs once
const GetProducts = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")
    const navigate=useNavigate()//navigation from one component to another
    // path for our image
    const img_url = "https://ecraswala.alwaysdata.net/static/images/"
    const getproducts = async () => {
        setLoading("please wait.....")
        try {
            // connect to backend api
            const response = await axios.get("https://ecraswala.alwaysdata.net/api/get_product_details")
            // update the products hook with the data from the api
            setProducts(response.data)
            // after getting the response reset the loading hook
            setLoading("")
        } catch (error) {
            setLoading("")
            setError("something went wrong")
        }
    }
    useEffect(() => {
        getproducts()

    }, [])//empty dependency to ensure that the get products runs once with the components mounts
    return (
        <div className="row">
            <h1 className="text-center"><b>Available products here</b></h1>
            {loading}
            {error}
           {products.map((product) => (
            <div className="col-md-3 justify-content-center mb-4">
                {/* Card with equal size */}
                <div className="card shadow card-margin">
                        <img 
                            className=" product_img mt-4"
                            src={img_url + product.product_photo} 
                        />
                    <div className="card-body">
                        <h5 className="mt-2">{product.product_name}</h5>
                        <p className="text-muted">{product.product_description}</p>
                        <b className="text-warning">{product.product_cost} KES</b>  <br />
                        <button className="btn btn-dark mt-2 w-100" onClick={()=>navigate('/MpesaPayment',{state:{product}})}>Purchase Now</button>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}
export default GetProducts;