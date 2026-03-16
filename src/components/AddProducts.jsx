import { useState } from "react"

const AddProducts=()=>{
    // hooks
    const[product_name,setProduct_name]=useState("")
    const[product_cost,SetProduct_cost]=useState("")
    const[product_description,setProduct_description]=useState("")
    const[product_photo,setProduct_photo]=useState("")
    const [success,setSuccess]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const submit=async(e)=>{
        e.preventDefault()
        setLoading("Please wait as we load your data")
    try{
        const data=new FormData()
        data.append('product_name',product_name)
        data.append('product_cost',product_cost)
        data.append('product_description',product_description)
        data.append('product_photo',product_photo)
        const response=await fetch("http://ecraswala.alwaysdata.net/api/add_products",{
                method:"POST",
                body:data
            })
            const result=await response.json()
            if(result.error){
                setError(result.error)
                setLoading("")
            }else{
                setSuccess("Product added successfully")
                setLoading("")
            }
        }catch(error){
            setError("An error occured while adding the product")
            setLoading("")
        }
    }
    return(
        <div className="d-flex justify-content-center row text-start" >
            <div className="card shadow col-md-6  mt-4" >
                {loading}
                {error}
                {success}
                <form onSubmit={submit} className="card-body">
                    <h1>Upload Products</h1>
                    <input type="text" placeholder="Enter Product name" className="form-control"
                        required value={product_name} onChange={(e) => setProduct_name(e.target.value)} />
                    <br />
                    {product_name}
                    <textarea placeholder="Describe your product" className="form-control"
                        required value={product_description} onChange={(e) => setProduct_description(e.target.value)}></textarea>
                    <br />
                    {product_description}
                    <input type="number" placeholder="Enter product cost" className="form-control"
                        required value={product_cost} onChange={(e) => SetProduct_cost(e.target.value)} />
                        {product_cost}
                    <br />
                    <p><b>Browse/Upload Product Image</b></p>
                    <input type="file"
                        className="form-control"
                        required
                        accept="image/*"
                         onChange={(e) => setProduct_photo(e.target.files[0])} />
                    <br />
                    <button type="submit" className="btn btn-primary">Upload product</button>
                </form>
            </div>
        </div>
    )
}
export default AddProducts;