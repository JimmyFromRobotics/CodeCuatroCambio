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
           
            <tr key={directory.id} onClick={handleClick} >
                <td>{directory.title} </td>
                <td > {directory.description} </td>
            </tr> 
            
        
    );});

    return <div>{buildingList}</div>;
};
export default BuildingList;
