import React, { useState } from "react";
import Table from "./Table";
import CreateNew from "./CreateNew"
import Button from '@material-ui/core/Button';
import { Widget, addResponseMessage,  toggleMsgLoader } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo from '../logo.svg';

export default function Home() {
  const [data, setData] = useState([{
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
  }]
  )
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNew = (object) => {
    setData([...data, object])
    setOpen(false)
  } 

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
    <div style={{width:"90%", margin:"2em auto auto", textAlign:"center"}}>
      {open ? <h2>Add new Task</h2>: <h2>Tasks Details</h2>}
      {open ? <Button onClick={handleClose} variant="contained" color="primary">Go Back</Button>: <Button onClick={handleOpen} variant="contained" color="primary">Create New</Button>}
      {open ? <CreateNew handleNew={handleNew}/>: <Table data={data}/>}
    
      <Widget
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={logo}
      title="Rhombit Bot"
      subtitle="Helsinki"
      
    />
    </div>
  );
}
