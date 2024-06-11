import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




const CardDetails = () => {

    let {id} = useParams();
    let [fetchedData, setFetchedData] = useState([]);
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    let {name, image, status, gender, location, origin, species, type} = fetchedData;

    useEffect(()=>{
    
        (async function(){
            let data = await fetch(api)
              .then(res=>res.json())
              setFetchedData(data)
          })()
      
        },[api])



  return (
    <div className="container d-flex justify-content-center">

        <div className="d-flex flex-column gap-3">
            
            <div className="">
                <h1 className="text-center">{name}</h1>
            </div>
            
            
            <img src={image} alt="" className="img-fluid" />


            {(()=>{

                    if(status === "Dead"){

                        return(
                            <div className="badge bg-danger fs-5">
                                {status}
                            </div>
                        )



                    }else if(status === "Alive"){

                        return(
                            <div className="badge bg-success fs-5">
                                {status}
                            </div>
                        )

                    }else{

                        return(
                            <div className="badge bg-secondary fs-5">
                                {status}
                            </div>
                        )

                    };

            })()} 


            <div className="content">

                <div className="">

                    <div className="">
                        <span className="fw-bold">
                            Gender :
                        </span>{gender}
                    </div>

                    <div className="">
                        <span className="fw-bold">
                            Location :
                        </span>{location?.name}
                    </div>

                    <div className="">
                        <span className="fw-bold">
                            Species :
                        </span>{species}
                    </div>

                    <div className="">
                        <span className="fw-bold">
                            Origin :
                        </span>{origin?.name}
                    </div>

                    <div className="">
                        <span className="fw-bold">
                            Type :
                        </span>{type==="" ? " Unknown" : type}
                    </div>


                </div>
                
            </div>


        </div>

    </div>
  )
}

export default CardDetails