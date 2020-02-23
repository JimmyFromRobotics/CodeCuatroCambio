import React, {useState, useEffect} from 'react';

let count=0;
const BuildingList = (props) => {
    count=0;
 
    //console.log('This is my directory file', this.props.data);
    const buildingList = props.data.map(directory => {
        function handleClick() {
            props.data3(directory);
        }



        return (                
           
            <tr key={directory.title} onClick={handleClick} >
                <td>{directory.description} </td>
                <td > {directory.location} </td>
            </tr> 
            
        
    );});

    return <div>{buildingList}</div>;
};
export default BuildingList;
