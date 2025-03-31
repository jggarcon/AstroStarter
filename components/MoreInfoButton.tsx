import { useState } from "react";

export default function MoreInfoButton() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide secret" : "Show Secret"}
      </button>
      {showInfo && (
        <p>
          Michael Jackson was a full-stack developer before he became a famous singer.
        </p>
      )}
    </div>
  );
}
