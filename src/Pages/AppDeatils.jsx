import { useLoaderData } from "react-router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);

  const handleInstall = () => {
    setInstalled(true);
    toast.success("App Installed Successfully!");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      

      {/* 🔹 App Info Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-full rounded-xl shadow-lg"
        />

        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold mb-3">{app.title}</h2>

          <p className="text-gray-600 mb-2">⭐ Rating: {app.ratingAvg}</p>
          <p className="text-gray-600 mb-2">
            ⬇ Downloads: {app.downloads.toLocaleString()}
          </p>
          <p className="text-gray-600 mb-4">💬 Reviews: {app.reviews}</p>

          <button
            disabled={installed}
            onClick={handleInstall}
            className={`px-6 py-2 rounded-lg text-white transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      {/* 🔹 Review Chart */}
      <div className="mt-14">
        <h3 className="text-2xl font-semibold mb-6">User Reviews</h3>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={app.ratings}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🔹 Description */}
      <div className="mt-14">
        <h3 className="text-2xl font-semibold mb-4">Description</h3>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </section>
  );
};

export default AppDetails;
