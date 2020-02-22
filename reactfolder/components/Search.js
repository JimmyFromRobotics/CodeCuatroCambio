import React, { useState } from "react";
import BuildingList from './BuildingList';




const Search = (props) => {
    //You will need to save the value from the textbox and update it as it changes
    //You will need the onChange value for the input tag to capture the textbox value
    return (
      
        <form>
            <input type="text" placeholder="Type to Filter" onChange={(event) => props.updateFilter(event.target.value)}/>
        </form>
    );

};


/*
function Search(props) {
  const [name, setName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      BuildingList.filter(element=>element.indexOf(name)!==-1);
     // alert(`Submitting Name ${name}`)
  }
  return (
    <form onChange={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
 */
export default Search;
