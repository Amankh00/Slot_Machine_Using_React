import React from "react";
import Head from "./Heading";
import SlotM from "./SlotM"


const MultipleSlot = () =>
{
    return(
<>

  <Head/>
  <div className="All">
<SlotM x='😃' y='😃' z='😃' />
<SlotM x='😂' y='😃' z='🤫' />
<SlotM x='😇' y='😃' z='😃' />

</div>
</>
    );
}

export default MultipleSlot;