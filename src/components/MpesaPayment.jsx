import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


const MpesaPayment = () => {
    const [message,setMessage] = useState("")
    const [phone, SetPhone] = useState("")
    const {product}=useLocation().state || {}
    console.log("response",product)
    const img_url = "https://malombeswala.alwaysdata.net/static/images/"
    const submit= async(e)=>{
        e.preventDefault()
        setMessage("Please wait....")
    
    try {
        const data = new FormData()
        data.append('phone',phone)
        data.append('amount',product.product_cost)
        const response =await axios.get("http://ecraswala.alwaysdata.net/api/MpesaPayment",data)
        setMessage(response.data.message)
    } catch (error) {
        setMessage(error.message)
    }
    }
    return (
        <div className="row">
            <div className="container col-md-6 mt-5">
                <div className="card p-3 mx-auto">
                    <h5 className="text-center text-success">LIPA NA MPESA</h5>
                    <img src={img_url + product.product_photo} alt="product" className="img_fluid mb-2/>" /> <br />
                    <p className="mb-1"><strong>product:{product.product_name}</strong></p> <br />
                    <p className="mb-1"><strong>price:{product.product_cost}</strong></p> <br />
                    <form onSubmit={submit}>
                        <input
                            type="text"
                            placeholder="Enter your Phone number,254..."
                            className="form-control mb-2"
                            required
                            value={phone}
                            onChange={(e) => SetPhone(e.target.value)}/>
                            {phone}
                        <button type="submit" className="btn btn-success text-center w-100 mt-2">Pay Now</button>
                    </form>
                    <p className="text-center mt-2">{message}</p>
                </div>
            </div>
        </div>
    )
}
export default MpesaPayment;