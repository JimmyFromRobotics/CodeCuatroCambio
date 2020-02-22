import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';
import { render } from '@testing-library/react';
let title="";
let description="";
let location="";
let wage="";
let requirements="";
let idCount=0;
const App = (props) => {
    const [filterText, setFilterText] = useState('');
    const [selectedBuilding, setSelectedBuilding] = useState(0);
    let lista=props.data;
    for(let i=0; i<lista.length; i++)
        if(lista[i].id>idCount)
            idCount=lista[i].id;
    const [list, updateList] = useState(lista);

    const filterUpdate = (value) => {
        //Here you can set the filterText property of state to the value passed into this function
    };

    const selectedUpdate = (id) => {
        
        //Here you can update the selectedBuilding property of state to the id passed into this function
    };

    const addTo=()=>{
        idCount++;
        if(code!=='undefined'){
        let b=false;
        let k;
        for(let i=0; i<props.data.length; i++)
            if(props.data[i].code.localeCompare(code)>0){
                b=true;
                props.data.splice(i, 0, {
                    id:idCount,
                    name: name, 
                    code:code,
                    coordinates:{
                        latitude: lat, 
                        longitude:lon
                    },
                    address:adde
                });
                k=i;
                break;
            }
            if(!b){
            props.data.push({
                id:idCount,
                name: name, 
                code:code,
                coordinates:{
                    latitude: lat, 
                    longitude:lon
                },
                address:adde
            });
            k=props.data.length-1;
        }
        /*
            props.data.push({
            id:idCount,
            name: name, 
            code:code,
            coordinates:{
                latitude: lat, 
                longitude:lon
            },
            address:adde
        });
        */
        let arry=props.data;
        setSelectedBuilding(props.data[k]);
        return arry;
    }
};

    const func = (nae) => {
        name=nae;
    };
    const func2 = (nae) => {
        code=nae;
    };

    const func3 = (nae) => {
        adde=nae;

    };
    const func4 = (nae) => {
        lon=nae;

    };

    const func5 = (nae) => {
        lat=nae;

    };


    const fun = () => {
        console.log(10);
        let arr=props.data;
        return arr.push({
            id: 129,
            code: code,
            name: name,
            address: adde
        });
    };


    const getResultsOfFilter = () => {

        return list.filter(directory => directory.name.includes(filterText))


    };

    const getNotThisOne = (val) => {
        let arr=[];
        for(let i=0; i<props.data.length; i++)
        if(props.data[i]!==val)
        arr.push(props.data[i]);
        return arr;

    };
    const getId = () => {
        return list.filter(e=>(e.id===(selectedBuilding.id)))[0];
    };

    const getI = () => {
        return (list.filter(e => selectedBuilding.id !== e.id))
    };
    const remove=()=>{
        console.log(list.length);
        let p=0;
        for(let i=0; i<props.data.length; i++)
            if(selectedBuilding.id===props.data[i].id)
            p=i;
      return  p;
        };

        const add=()=>{
            console.log(list.length);
            let p=0;
            for(let i=0; i<props.data.length; i++)
                if(selectedBuilding>props.data[i].code)
                p=i;
          return  p;
            };

    const deleteListing = () => {
        
    };
    const hello=()=>{
        return selectedBuilding;      
    }
    return (
        
       
        <div className="bg">
            <div className="row">
                <h1>UF Directory App</h1>
            </div>
      
                
           
            <Search updateFilter={setFilterText} />
           
            <main>
                
                <div className="row">
                    <div className="column1">
                        <div className="tableWrapper">
                            <table className="table table-striped table-hover">
                                <tr>
                                    <td>
                                        <b>Code Building</b>
                                    </td>
                                </tr>  
                                <BuildingList 
                                data3={setSelectedBuilding}
                                data={getResultsOfFilter()}
                                
                                    
                                />
                                
                                

                               
                   </table>
                        </div>
                      
                    </div>
                    
                    <div className="column2">
                     <ViewBuilding 
                        dataOne={getId()} 
                        />  
                        <button  onClick={()=>updateList(getNotThisOne(props.data.splice(remove(), 1)))}>remove</button>
            <input type="text" placeholder="Enter name of added Building" onChange={(e)=>func(e.target.value)}></input>
            <input type="text" placeholder="Enter code of added Building"onChange={(e)=>func2(e.target.value)}></input>
            <input type="text" placeholder="Enter address of added Building"onChange={(e)=>func3(e.target.value)}></input>
            <input type="text" placeholder="Enter latitude of added Building"onChange={(e)=>func5(e.target.value)}></input>
            <input type="text" placeholder="Enter longitude of added Building"onChange={(e)=>func4(e.target.value)}></input>
            <button onClick={()=>updateList(addTo())}>Add Building</button>

        
                        
                    </div>
                </div>
                <Credit/>
                
            </main>
        </div>
    );
};


export default App;
