import React from 'react';

const AddBuilding = (props) => {
function getThat(){
return props.data;
}
    return (
        <form>
             onClick={(event) => props.updateFilter(event.target.value)}/>
            <input type="text" placeholder="Enter name of added Building"></input>
            <input type="text" placeholder="Enter code of added Building"></input>
            <input type="text" placeholder="Enter address of added Building"></input>
            <input type="text" placeholder="Enter latitude of added Building"></input>
            <input type="text" placeholder="Enter longitude of added Building"></input>
            <button onClick={getThat}>Add Building</button>
        </form>
    );




}

export default AddBuilding;
