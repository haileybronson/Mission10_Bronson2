import { useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

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
        <tbody>
          {bowlerData.map((f) => (
            <tr key={f.bowlerId}>
              <td>{f.bowlerLastName}</td>
              <td>{f.bowlerFirstName}</td>
              <td>{f.bowlerMiddleInit}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
