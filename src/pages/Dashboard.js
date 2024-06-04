import React, { useEffect, useState } from "react";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import GridLayout from 'react-grid-layout'
import Sidebar from "./Sidebar";
import "../css/Common.css";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);


const Dashboard = () => {
  const [layout,setLayout] = useState([
    { i: "a", x: 1, y: 0, w: 1, h: 1},
    { i: "b", x: 2, y: 2, w: 1, h: 1 },
    { i: "c", x: 3, y: 1, w: 1, h: 1 }
  ]);
  const [clickedItem,setClickedItem] = useState();
    
  let SideBarList = [
    { i: "a", x: 0, y: 0, w: 12, h: 1 ,isResizable:false},
    { i: "b", x: 0, y: 1, w: 12, h: 1  ,isResizable:false},
    { i: "c", x: 0, y: 2, w: 12, h: 1  ,isResizable:false},
    { i: "d", x: 0, y: 3, w: 12, h: 1 ,isResizable:false},
    { i: "e", x: 0, y: 4, w: 12, h: 1  ,isResizable:false},
    { i: "f", x: 0, y: 5, w: 12, h: 1  ,isResizable:false},
    ]
    // 컴포넌트 리스트도 따로 있어야 겠네?
    // 원본 컴포넌트 및 레이아웃 정보 
    let base_component_info = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
    { i: "c", x: 2, y: 0, w: 1, h: 1 },
    { i: "d", x: 3, y: 0, w: 1, h: 1 },
    { i: "e", x: 4, y: 0, w: 1, h: 1 },
    { i: "f", x: 5, y: 0, w: 1, h: 1 },
    ]


  // x 값과 y값은 마우스 위치에 따라서 만들어서 넣기 ? 
  //layout 을 store에 저장 후 사용 후 마지막에 store 가 소멸할 때 DB에 넣기
  const onDrag=(e)=>{
    
  }
  const onDragStart = (e)=>{
    if(e&&e.target&&e.target.innerText){
      setClickedItem(e.target.innerText)
    }
  }
  const onDrop = (layout, layoutItem, _event) => {
    
    let conflict_value = false;
    let new_add_item = base_component_info.filter(v=>v.i===clickedItem)
    for(let i=0; i<layout.length; i++){
      if(layout[i].i === new_add_item[0].i){
        conflict_value = true
      }
    }

    let addItem = conflict_value ? null : {
      i : new_add_item[0].i,
      w: new_add_item[0].w,
      h: new_add_item[0].h,
      x: layoutItem.x,
      y: layoutItem.y
    }
    
    // layout을 정한 후 컴포넌트를 밀어 넣기
    // 1. 어떤 방식으로 컴포넌트 밀어넣을지?
    // 2. 드래그한 layout의 이름을 어떻게 긁어올지??
    for(let k = 0 ; k<layout.length; k++){
      if(!addItem){
        if(layout[k].i === "__dropping-elem__"){
          layout.splice(k,1)
        }
      } else {
        if(k === addItem.x ){
          layout.splice(k+1,0,addItem)
        }
      }
    }
    for(let k = 0 ; k<layout.length; k++){
    if(layout[k].i === "__dropping-elem__"){
      layout.splice(k,1)
    }
  }
    setLayout(layout)
  };
  // useEffect(()=>{
  //   console.log({layout})
  // }, [layout])
    return(
        <>
        {/* <Sidebar
        SideBarList={SideBarList}
        /> */}
        {SideBarList.map((x,i)=> <div
          className="droppable-element"
          draggable={true}
          unselectable="on"
          key={i}
          onDragStart={e => onDragStart(e)}
        >
        {x.i}  
        </div>)}
        
        <ResponsiveReactGridLayout
        layout={layout}
        cols={{xl:24,lg:24,md:24}}
        width={1200}
        rowHeight={200}
        
          // onBreakpointChange={this.onBreakpointChange}
          // onLayoutChange={this.onLayoutChange}
          onDrop={onDrop}
          // measureBeforeMount={false}
          // useCSSTransforms={this.state.mounted}
          // compactType={this.state.compactType}
          // preventCollision={!this.state.compactType}
          // onDrag={e=>onDrag}
          isDroppable={true}
        className="GridLayout"
        >
          {layout.map(x=><div key={`${x.i}`}>{`${x.i} 영역`}</div>)}
        </ResponsiveReactGridLayout>
        </>
    )
}
export default Dashboard