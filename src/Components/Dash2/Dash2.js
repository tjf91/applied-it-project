import React from "react";



const Dash2=(props)=>{
    const mappedItems= props.itemCompare.map((item,index)=>{
        return(
            <div>
                {item}
            </div>
        )
    })




    return(
        <div>
            {mappedItems}
        </div>
    )
}


export default Dash2