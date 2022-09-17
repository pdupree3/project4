import React from "react";
import PeerSpot from "../components/PeerSpot";

const PeerRoomPage = ({
  peerRoom,
  peerSpots,
  setPeerPots,
}) => {
  return (
    <div>
      <h1>{peerRoom.name}</h1>
      {peerSpots.map((s) => {
        return (
          <div>
            <PeerSpot
              key={s._id}
              id={s._id}
              img={s.img}
              grade={s.grade}
              value={s.value}
              teacher={s.teacher}
              action={s.action}
              setPeerPots={setPeerPots}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PeerRoomPage;
