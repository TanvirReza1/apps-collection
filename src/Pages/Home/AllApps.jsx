import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../Components/Loading";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading applications...");

  const navigate = useNavigate();

  useEffect(() => {
    

    fetch("/Apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      });
  }, []);

  // 🔍 Live search (case-insensitive)
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 relative">
      {loading && <Loading text={loadingText} />}
      {/* Title Section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Our All Applications</h2>
        <p className="text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search & Stats */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-gray-700">
          Total Apps: <span className="font-semibold">{apps.length}</span>
        </p>

        <input
          type="text"
          placeholder="Search apps by title..."
          value={search}
          onChange={(e) => {
            setLoading(true);
            setLoadingText("Searching apps...");
            setSearch(e.target.value);
            setTimeout(() => setLoading(false), 300);
          }}
          className="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* App Section */}
      {filteredApps.length === 0 ? (
        <p className="text-center text-gray-500 mt-12">No App Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
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
      )}
    </section>
  );
};

export default AllApps;
