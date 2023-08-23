import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import MYbtns from './mycomponents/BUTTON';
import MYcard from './mycomponents/MYCARDS';
import MYInput from './mycomponents/INPUT';
import SELECT from './mycomponents/SELECT';
import Rendertable from './MYtable';
function App() {
  // function Btna(){
  //   console.log("button a")
  // }
  // function Btnb(){
  //   console.log("button b")
  // }

  let cards = [
    {
      id: 1,
      u_name: "rohail",
      age: 15,
      institute: "SAIMS",
      isActive: true,
      category: "A"
    },
    {
      id: 2,
      u_name: "moosa",
      age: 15,
      institute: "SAIMS",
      isActive: true,
      category: "A"
    },
    {
      id: 3,
      u_name: "ali",
      age: 22,
      institute: "SAIMS",
      isActive: false,
      category: "B"
    }

  ]

  const [text, setText] = useState("")

  let mobile = ["samsung", "Vivo", "iphone", "Real me", "Infinix"]

  let head = ["student_name","T_marks", "Obtained_marks", "percentage"]
  let info = [
    {
      Name:"x",
      t_marks:500,
      o_marks:350,
      percentage:"75%"
    },
    {
      Name:"y",
      t_marks:500,
      o_marks:420,
      percentage:"85%"
    },
    {
      Name:"z",
      t_marks:500,
      o_marks:450,
      percentage:"90%"
    }
  ];
  return (
    <div>
      {/* ======== buttons=========
    <MYbtns label1="button A" val="button A" click={Btna} />
    <MYbtns label1="button B" val="button B" click={Btnb} /> */}

      {/* ========== cards ===============
    {
      cards.map((obj,index)=>{
        return(
          <MYcard key={index} index={index} name={"username : "+obj.u_name} institute={"institute : "+obj.institute} category={"category : "+obj.category} age={"age : "+obj.age} id={"id : "+obj.id} />
        )
      })
    } */}

      {/*  =========== input ===================
    <MYInput myval={text} change={((e)=>setText(e.target.value))}/> 
    */}

      {/* =======     select ========= 

    <SELECT option={mobile}/> 
   */}

   {/* =========  table ================ */}

   <Rendertable heading={head} data={info}/>
    </div>

  );
}

export default App;
