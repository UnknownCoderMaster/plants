import React, {useState} from 'react';
import Navbar from "./navbar";
import ReactPaginate from "react-paginate";

function Services(props) {

    const [pageNumber, setPageNumber] = useState(0);
    const howManyObjects = 4;
    const pagesVisited = pageNumber * howManyObjects;

    const Flowers=[
        {
            name:"Outdoor Plant",
            price:"$50.00",
            img:"images/OutdoorPlant.png",
            backColor: "#EAF2E5"
        },
        {
            name:"Monstera Plant",
            price:"$50.00",
            img:"images/MonsteraPlant.png",
            backColor: "#F0EBE6"
        },
        {
            name:"Pottel Plant",
            price:"$50.00",
            img:"images/PottelPlant.png",
            backColor: "#E2ECE4"
        },
        {
            name:"Indoor Plant",
            price:"$50.00",
            img:"images/IndoorPlant.png",
            backColor: "#E7EEED"
        },
        {
            name:"Monstera Plant",
            price:"$50.00",
            img:"images/MonsteraPlant.png",
            backColor: "#F0EBE6"
        },
        {
            name:"Indoor Plant",
            price:"$50.00",
            img:"images/IndoorPlant.png",
            backColor: "#E7EEED"
        },
        {
            name:"Pottel Plant",
            price:"$50.00",
            img:"images/PottelPlant.png",
            backColor: "#E2ECE4"
        },
        {
            name:"Outdoor Plant",
            price:"$50.00",
            img:"images/OutdoorPlant.png",
            backColor: "#EAF2E5"
        },
        {
            name:"Indoor Plant",
            price:"$50.00",
            img:"images/IndoorPlant.png",
            backColor: "#E7EEED"
        },
        {
            name:"Pottel Plant",
            price:"$50.00",
            img:"images/PottelPlant.png",
            backColor: "#E2ECE4"
        },
        {
            name:"Monstera Plant",
            price:"$50.00",
            img:"images/MonsteraPlant.png",
            backColor: "#F0EBE6"
        },
        {
            name:"Outdoor Plant",
            price:"$50.00",
            img:"images/OutdoorPlant.png",
            backColor: "#EAF2E5"
        },
    ];

    const FlowerList= Flowers.slice(pagesVisited,pagesVisited + howManyObjects).map((item)=>{
        return <div className="card" style={{background:item.backColor}}>
            <div className="card-header p-0 d-flex justify-content-center border-0">
                <img src={item.img} alt={item.name}/>
            </div>
            <div className="card-body">
                <h6>{item.name}</h6>
                <h5>{item.price}</h5>
            </div>
        </div>
    });

    const pageCount = Math.ceil(Flowers.length / howManyObjects);
    const changePage = ({selected}) => {
        setPageNumber(selected)
    };

    return (
        <>
            <Navbar/>
            <div id="shop" className="container">
                <div className="row">
                    {FlowerList}
                </div>
                <div className="row">
                    <ReactPaginate
                        previousLabel={<img src="/icons/left.png" alt="prev" width={20}/>}
                        nextLabel={<img src="/icons/right.png" alt="next" width={20}/>}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledCalassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </div>
        </>
    );
}

export default Services;