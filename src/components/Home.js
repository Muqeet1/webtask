import React, { useState, useEffect } from "react";
import Table from "./Table";
import { BrowserRouter as Router } from "react-router-dom";
import { Widget, addResponseMessage,  toggleMsgLoader } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo from '../logo.svg';


const jsonData = [{
  jobname: "asda",
  id: "111",
  customer: "Axe",
  location: "point1",
  dateStart: "1.1.2020",
  status: "PENDING"
},
{
  jobname: "zsdasxc",
  id: "222",
  customer: "johny",
  location: "point2",
  dateStart: "2.1.2018",
  status: "Ongoing"
},
{
  jobname: "fdsfdsf",
  id: "333",
  customer: "depp",
  location: "point3",
  dateStart: "2.1.2011",
  status: "Ongoing"
},
{
  jobname: "gdfhjd",
  id: "444",
  customer: "doe",
  location: "point4",
  dateStart: "2.1.2021",
  status: "Pending"
},
{
  jobname: "fdsgsgsg",
  id: "555",
  customer: "john",
  location: "point5",
  dateStart: "2.1.2018",
  status: "Ongoing"
}

]

const AddItem = [{
}]

export default function Home() {
  const [data, setData] = useState()
  useEffect(() => {
    addResponseMessage('Welcome to our chat! How may we help?');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    setTimeout(() => {
      toggleMsgLoader();
  }, 500);
  setTimeout(() => {
      addResponseMessage('Thank you for reaching us. We will get back to you ASAP!');
  }, 1000);
    // Now send the message throught the backend API
  };
  return (
      <div style={{width:"90%", margin:"2em auto auto"}}>
      <h2 style={{textAlign:"center"}}>Tasks Details</h2>
      <button onClick={AddItem}>  Add Items
</button>
      <Table data={jsonData}/>
      <Widget
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={logo}
      title="Rhombit Bot"
      subtitle="Helsinki"
      
    />
    </div>
  );
}
