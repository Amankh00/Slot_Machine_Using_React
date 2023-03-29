import React,{useEffect,useState} from "react";
import Header from "./Header";
import axios from "axios";
const Home = ()=>
{

    const[num,setNum] = useState(); 
    const[ide,setIde] = useState([]);

    const ax = async ()=>
    {
       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
     console.log(res.data);
     setNum(res.data.name)
     setIde(res.data.moves.length);
     console.log(res.data.moves.length)
    }
    
    useEffect(() => {
        ax();
        })
    

    return(
        <>
        <Header/>
        <div className="yes">
        
        <select value= {num}  onChange={(e)=>setNum(e.target.value) 
        } >
            
                    <option value="curr">😆</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                
                </select>

                <h3 style={{fontSize:"20px"}}>your pokemon name is <span  style={{fontSize:"20px"}}> {num}</span></h3>
        <p  style={{fontSize:"12px"}}>  you have total   <span  style={{fontSize:"23px"}}>{ide}</span>  move   </p>
                </div>
        </>
    )
}

export default Home;