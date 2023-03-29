import React,{useEffect, useState} from "react"
import Header from "./Header";
import "./StateWD.css"
const StateWD = ()=>
{

    const[data,setData] = useState([]);



 const getCovidDeatils  = async ()=>
 {
    const res = await fetch("https://data.covid19india.org/data.json");
    const realData  = await res.json();
    console.log(realData.statewise);
    console.log(realData.statewise);
    setData(realData.statewise)
 }


   useEffect(() => {
      getCovidDeatils() 
      
    },[])
   
    

    return(
          <>
          <Header/>
        
  <div className="d1">
      <h1 style={{textAlign:"center;", textTransform:"uppercase",fontSize:"23px"}}>India Covid-19 Details Dash
Board</h1>
        <div className="content">
            <div className="tr">
                <table className="tbl">
                    <thead>
                        <tr id="gg">
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>recoverd</th>
                            <th>death</th>
                            <th>active</th>
                            <th>updated</th>
                            
                        </tr>
                        
                    </thead>

                    <tbody>
                            {
                                data.map((val,ind)=>
                                {
                                    return(
                                        <tr key={ind} id="gg">
                                        <td> {val.state} </td>
                                        <td>{val.confirmed}</td>
                                        <td>{val.recovered}</td>
                                        <td>{val.deaths}</td>
                                        <td>{val.active}</td>
                                        <td>{val.lastupdatedtime}</td>
                                        
                                    </tr>
                                    )
                                })
                            }
                    </tbody>

                </table>

                
            </div>
        </div>
        
      </div>
     

          </>

    )
}
export default StateWD;