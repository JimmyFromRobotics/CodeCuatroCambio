import React from 'react';

const ViewBuilding = (props) => {
    let a="title: ";
    let b="description: ";
    let c="location: ";
    let d="wage: ";
    let e="requirements: ";
    let f="";
    let g="";
    if(props.dataOne!=null){
    a=a+props.dataOne.title+"                     ";
    b=b+props.dataOne.description+"                       ";
    c=c+props.dataOne.location+"                     ";
    d=props.dataOne.wage;
    for(let i=0; i<props.dataOne.requirements.length; i++)
        e=e+props.dataOne.requirements[i]+", ";
    for(let i=0; i<props.dataOne.additionalReqs.length; i++){
        f=f+props.dataOne.reqs[i]+": "+props.dataOne.additionalReqs[i];
    }
    return (
        <div>
            <p >
               
               {b}<br></br> {a}<br></br>{c}<br></br>{d}<br></br>{e}<br></br>{f}
            </p>
        </div>
    );


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
