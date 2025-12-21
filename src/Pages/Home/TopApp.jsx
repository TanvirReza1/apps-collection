import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const TopApp = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data.slice(0, 8)));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Top Apps</h2>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            onClick={() => navigate(`/apps/${app.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-lg font-semibold mb-2">{app.title}</h3>

            <div className="flex justify-between text-sm text-gray-600">
              <span>⬇ {app.downloads.toLocaleString()}</span>
              <span>⭐ {app.ratingAvg}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="text-center mt-8">
        <Link
          to="/apps"
          className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Show All
        </Link>
      </div>
    </section>
  );
};

export default TopApp;
