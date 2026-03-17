import axios from "axios";
import { useEffect, useState } from "react";
// useEffect==used to run side effects
// to avoid refreshing the browser manually
// puting empty dependencies===when we always need a new category to make sure it runs once
const GetProducts=()=>{
    const [products,setProducts]=useState("")
    const [error,setError]=useState("")
    const [loading,setLoading]=useState("")
    const getproducts=async() => {
        setLoading("please wait.....")
        try{
            // connect to backend api
            const response=await axios.get("https://malombeswala.alwaysdata.net/api/get_product_details")
            // update the products hook with the data from the api
            setProducts(response.data)
            // after getting the response reset the loading hook
            setLoading("")
        }catch(error){
            setLoading("")
            setError("something went wrong")
        }
    }
    useEffect(()=>{
        getproducts()

 },[])//empty dependency to ensure that the get products runs once with the components mounts
    return(
        <div className="row">
                <h1 className="text-center"><b>Available products here</b></h1>
                {loading}
                {error}
                <div className="col-md-3 text-center mb-4">
                {/*card with dummy data*/}
                <div className="card shadow">
                    <img src="" alt="" className="product_img mt-4"/>
                    <h5 className="mt-2">Heading</h5>
                    <p className="text-muted">Description</p>
                    <b className="text-warning">cost KES</b>
                    <button className="text-light btn-btn-light w-100 mt-2 bg-dark h-400" >Purchase now</button>
                </div>
                </div>
        </div>
    )
}
export default GetProducts;