import React from "react";
import ClientReuse from "../Components/ClientReuse";
import Client1 from "../assets/images/clients/c1.png";
import Client2 from "../assets/images/clients/c2.png";
import Client3 from "../assets/images/clients/c3.png";

function ClientSay() {
  return (
    <div>
      <div style={{ marginTop: "100px" }} className="client-section">
        <h2
          style={{
            textAlign: "center",
            color: "#4F5561",
            fontSize: "40px",
            textTransform: "capitalize",
          }}
        >
          what our clients say
        </h2>
        <div style={{ width: "100px", color: "blue" }} className="line"></div>
        <div
          className="client"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "40px 30px",
            textAlign: "center",
          }}
        >
          <div class="client-details">
            <ClientReuse
              Client={Client1}
              description="Sed ut pers unde omnis iste natus error sit voluptem accusantium dolor laudan rem aperiam,eaque ipsa quae ab illo inventore verit"
              name="Jhon Doe"
              address="New York"
            />
          </div>
          <div class="client-details">
            <ClientReuse
              Client={Client2}
              description="Sed ut pers unde omnis iste natus error sit voluptem accusantium dolor laudan rem aperiam,eaque ipsa quae ab illo inventore verit"
              name="John Smith"
              address="London"
            />
          </div>
          <div class="client-details">
            <ClientReuse
              Client={Client3}
              description="Sed ut pers unde omnis iste natus error sit voluptem accusantium dolor laudan rem aperiam,eaque ipsa quae ab illo inventore verit"
              name="Susmita Smith"
              address="Bangladesh"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSay;
