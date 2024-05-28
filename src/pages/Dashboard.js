import React from "react";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import GridLayout from 'react-grid-layout'
// import SideBar from "./SideBar";
// import "../css/Common.css";

const Dashboard = () => {
  console.log("dashboard!!")
    // let SideBarList = [
    // { i: "a", x: 0, y: 0, w: 12, h: 1 ,isResizable:false},
    // { i: "b", x: 0, y: 1, w: 12, h: 1  ,isResizable:false},
    // { i: "c", x: 0, y: 2, w: 12, h: 1  ,isResizable:false},
    // { i: "d", x: 0, y: 3, w: 12, h: 1 ,isResizable:false},
    // { i: "e", x: 0, y: 4, w: 12, h: 1  ,isResizable:false},
    // { i: "f", x: 0, y: 5, w: 12, h: 1  ,isResizable:false},
    // ]
    const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1},
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
    { i: "c", x: 2, y: 0, w: 1, h: 1 }
  ];
  // x 값과 y값은 마우스 위치에 따라서 만들어서 넣기 ? 
  //layout 을 store에 저장 후 사용 후 마지막에 store 가 소멸할 때 DB에 넣기
    return(
        <>
        {/* <SideBar
        SideBarList={SideBarList}
        /> */}
        <GridLayout
        layout={layout}
        cols={12}
        width={1200}
        rowHeight={250}
        
        className="GridLayout"
        >
          {layout.map(x=><div key={`${x.i}`}>{`${x.i} 영역`}</div>)}
        </GridLayout>
        </>
    )
}
export default Dashboard