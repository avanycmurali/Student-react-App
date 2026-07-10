import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import { useSearchParams } from 'react-router-dom'

const ViewStudent = () => {

    const [data, changeData] = useState(
        [
            { "name": "Avany", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweQ9AVbUn-aoDtvQDK318B9uGq-4uzP-vWj33BiDr3g&s=10", "admno": "Adm:12345", "class": "MCA" },
            { "name": "Arjun", "avatar": "https://cdn-icons-png.flaticon.com/512/3584/3584411.png", "admno": "Adm:45678", "class": "MBA" },
            { "name": "Vishnu", "avatar": "https://cdn-icons-png.flaticon.com/512/3584/3584411.png", "admno": "Adm:18975", "class": "BCA" },
            { "name": "Kashi", "avatar": "https://cdn-icons-png.flaticon.com/512/3584/3584411.png", "admno": "Adm:34678", "class": "BBA" },
            { "name": "Krisha", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweQ9AVbUn-aoDtvQDK318B9uGq-4uzP-vWj33BiDr3g&s=10", "admno": "Adm:89760", "class": "BTECH" }
        ]
    )

    return (

        <div>
            <NavigationBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {data.map(
                                (value,index) => {
                                    return(
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card">
                                    <img src={value.avatar} class="card-img-top" alt="..." height="200px" width="50px"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text">{value.admno}</p>
                                        <p class="card-text">{value.class}</p>
                                        <a href="#" class="btn btn-dark">View Details</a>
                                    </div>
                                </div>

                            </div>
                                    )
                                }
                            )}
                            
                           
                            
                            
                            
                            
                            
                           
                            
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewStudent