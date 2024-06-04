import React from "react";
import "../css/Common.css"
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import GridLayout from 'react-grid-layout'

const Sidebar = ({SideBarList}) => {
    const dropItem = ()=>{
        console.log("dropItem!!")
    }
    return(
        <div className="Sidebar-wrapper">
        <GridLayout
        layout={SideBarList}
        cols={12}
        width={200}
        rowHeight={50}
        >
        {SideBarList.map(x=><div onMouseDown={()=>dropItem} className="Sidebar-item" key={`${x.i}`}>{`${x.i}`}</div>)}

        </GridLayout>

        </div>
    )
}
export default Sidebar