import React from "react";
import Charts from "./Charts/Charts";
import Score from "./Score/Score";
import CreateCard from "./CreateCard/CreateCard";
export default function Dashboard() {
  return (
    <React.Fragment>
      <div className="heading">
        <h3 style={{marginLeft:'-13px'}} className="mt-2">Dashboard</h3>
      </div>
      <div className="row">
        <div style={{marginLeft:'-13px'}} className="col-xl-5 col-lg-12 col-md-12">
          <Charts />
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12">
          <Score />
        </div>
      </div>
      <div>
        <CreateCard />
      </div>
    </React.Fragment>
  );
}
