import React from "react";
import CardComponent from "./Card";
import "./Tickets.css";

const Ticket = ({ ticket }) => {
  const { title, status, priority, user } = ticket;

  return (
    <CardComponent
      title={title}
      description={
        <>
          <div className="ticket-info">
            <span className="status-icon">✓</span>
            <span className="status-label">Status:</span>
            <span className="status-value">{status}</span>
          </div>

          <div className="ticket-info">
            <span className="priority-icon">!</span>
            <span className="priority-label">Priority:</span>
            <span className="priority-value">{priority}</span>
          </div>

          <div className="ticket-info">
            <span className="user-icon">👤</span>
            <span className="user-label">Assigned to:</span>
            <span className="user-value">{user}</span>
          </div>
        </>
      }
    />
  );
};

export default Ticket;
