function BowlerList() {
  return (
    <>
      <div className="row">
        <h4 className="text-center">Here's the Bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name (First, Middle, Last)</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default BowlerList;
