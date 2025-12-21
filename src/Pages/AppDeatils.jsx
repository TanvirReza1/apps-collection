import { Link, useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../Components/Loading";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const [loading, setLoading] = useState(true);
  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);

  // 🔴 APP NOT FOUND (invalid route / refresh / wrong id)
  if (!app) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">App Not Found</h2>

        <p className="text-gray-600 mb-6">
          The app you are looking for does not exist or may have been removed.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </section>
    );
  }

  // 🔹 Check localStorage on load
  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    if (installedApps.includes(app.id)) {
      setInstalled(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [app.id]);

  if (loading) {
    return <Loading text="Loading app details..." />;
  }

  // 🔹 Handle install
  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }

    setInstalled(true);
    toast.success("App Installed Successfully!");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* 🔹 App Info Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={app.image}
          alt={app.title}
          className="w-full rounded-xl shadow-lg"
        />

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
        <h3 className="text-2xl font-semibold mb-6">Ratings</h3>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={app.ratings}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
            >
              {/* X Axis → Counts */}
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280" }}
              />

              {/* Y Axis → Stars */}
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280" }}
              />

              <Tooltip cursor={{ fill: "#f3f4f6" }} />

              <Bar
                dataKey="count"
                fill="#fb923c" // orange like Figma
                radius={[0, 6, 6, 0]}
                barSize={22}
              />
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
