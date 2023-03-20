
const SlotM = (props) =>{
    
    
    // let x = '😃';
    // let y = '😃';
    // let z = '😃';

    // let x =props.x ;
    // let y =props.y ;
    // let z =props.z ;   OR Object ST
     let {x,y,z}= props ;
   
    if((x===y) && (y===z) && (z===x))
    {
    return(
           <>
           
         
       <div className="slot_inner">
        <h1 className="emoji">{x} {y} {z} {" "}</h1>
        <h1 className="Hd">This is Matching</h1>
     </div>
     </>
      );
    }

    else
    {
        return(
            <>
           
      <div className="slot_inner">
         <h1 className="emoji">{x} {y} {z} {" "}</h1>
         <h1 className="Hd">This is Not Matchine</h1>
      </div>
      </>
       );
    }
}

export default SlotM;