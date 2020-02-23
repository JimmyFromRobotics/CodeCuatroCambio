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
    if(i!==props.dataOne.requirements.length-1)
        e=e+props.dataOne.requirements[i]+", ";
        else
        e=e+props.dataOne.requirements[i];
        console.log(props.dataOne.additionalReqs[1]);
    for(let i=0; i<props.dataOne.additionalReqs.length-1; i+=2){
        f=f+props.dataOne.additionalReqs[i]+": "+props.dataOne.additionalReqs[i+1]+", ";
    }
    f=f.substring(0, f.length-2);
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
                <i>Click on a job to view more information <br></br><br></br></i>
                <i>Clicking on a job and then remove will remove the job (also it will default to most recent job put in if applicable, else the first element)</i>
                <i><br></br><br></br>Filling in fields and clicking Add Job will add a building with the specified fields</i>
            </p>
        </div>
        );
    }
};
export default ViewBuilding;
