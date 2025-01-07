import React from 'react';

export default function ShimmerHome() {
  return (
    <div className="main_cards">
      {Array.from({ length: 40 }, (_, i) => (
        <div key={i} className="card_shimmer"></div>
      ))}
    </div>
  );
}

