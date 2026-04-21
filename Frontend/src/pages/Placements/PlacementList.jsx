import { useEffect, useState } from "react";
import { getPlacements } from "../../services/placementService";
import PlacementCard from "../../components/PlacementCard";

function PlacementList() {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    getPlacements().then(res => {
      setPlacements(res.data.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-3">Placement Drives</h1>

      <div className="grid grid-cols-2 gap-4">
        {placements.map(placement => (
          <PlacementCard drive={placement} key={placement._id} />
        ))}
      </div>
    </div>
  );
}

export default PlacementList;
