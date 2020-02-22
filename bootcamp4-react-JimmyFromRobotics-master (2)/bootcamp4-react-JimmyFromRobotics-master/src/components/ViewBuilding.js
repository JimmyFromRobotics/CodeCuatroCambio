import React from 'react';

const ViewBuilding = (props) => {
    let a="name: ";
    let b="id: ";
    let c="code: ";
    let d="";
    let e="latitude: ";
    let f="longitude: ";
    let g="";
    if(props.dataOne!=null){
    a=a+props.dataOne.name+"                     ";
    b=b+props.dataOne.id+"                       ";
    c=c+props.dataOne.code+"                     ";
    d=props.dataOne.address;
    if(d!=="undefined" && props.dataOne.coordinates!=null){ 
    d="address:                        "+d+"             ";
    e=e+props.dataOne.coordinates.latitude+"                    ";
    f=f+props.dataOne.coordinates.longitude;
    return (
        <div>
            <p >
               
               {b}<br></br> {a}<br></br>{c}<br></br>{d}<br></br>{e}<br></br>{f}
            </p>
        </div>
    );
    }
    else{
        return (
            <div>
                <p >
                   
                   {b}<br></br> <br></br>{a}<br></br>{c}
                </p>
            </div>
        );

    }
    }
    else{
        return(
        <div>
            <p >
                <i>Click on a name to view more information <br></br><br></br></i>
                <i>Clicking on a building and then remove will remove the building (also it will default to most recent building put in if applicable, else the first element)</i>
                <i><br></br><br></br>Filling in fields and clicking Add Building will add a building with the specified fields</i>
            </p>
        </div>
        );
    }
};
export default ViewBuilding;
