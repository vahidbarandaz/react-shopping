// import { ListItem } from "@mui/material";
import { useContext } from "react";
import ProductContext from "../context/GeneralContext";
import { Link } from "react-router-dom";
import "./products.css";
import Loading from "./loading/skeleton"

const Products = () => {
  const productContext= useContext(ProductContext)
 


  return ( 
          <div className=" row  container">

            {
              productContext.isLoading ? (
                <Loading />
              ):(
                productContext.products.map((p, index) => {
         
                  return (
                    <div className="col cartP "  key={index}>
                      <div
                       
                        className="card ml-2 mr-2"
                        style={{ width: 18 + "rem" }}
                      >
                        <div className="card-body" >
                          <img
                            src={p.image}
                            className="card-img-top img-height"
                            alt="productPicture"
                          ></img>
                          <div className="d-flex justify-content-between mt-3">
                            <h2>{p.price}$</h2>
        
                            <Link
                              onClick={()=>{handleShow(p.id)}}
                              className="btn btn-primary "
                              to="/showMore"
                            >
                              show More
                            </Link>
                          </div>
                          <h5 className="card-title mt-31">{p.title}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })
              )
            }
      </div>
   );
   function handleShow(productId){
    productContext.onShow(productId)
   }
 

}
 
export default Products;

