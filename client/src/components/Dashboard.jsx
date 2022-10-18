import React from "react";
import "./Dashboard.css"
import Modal from "./Modal";


export default function Dashboard() {
  
  return (
    <div className="dashboard">
      <h2 className="arcade-heading">Arcades</h2>
      <ul>
        <Modal />
        <Modal />
        <Modal />

      </ul>
      
  </div>
)

}