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
      <div className="flex flex-col md:flex-row gap-8 items-center border-b pb-8">
        {/* App Icon */}
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 rounded-2xl object-cover"
        />

        {/* App Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-1">{app.title}</h2>
          <p className="text-sm text-blue-600 mb-4">
            Developed by productive.io
          </p>

          {/* Stats */}
          <div className="flex gap-10 mb-6">
            <div className="text-center">
              <p className="text-gray-500 text-sm">Downloads</p>
              <p className="text-xl font-semibold">
                {app.downloads.toLocaleString()}
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm">Average Ratings</p>
              <p className="text-xl font-semibold">{app.ratingAvg}</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm">Total Reviews</p>
              <p className="text-xl font-semibold">
                {(app.reviews / 1000).toFixed(0)}K
              </p>
            </div>
          </div>

          {/* Install Button */}
          <button
            disabled={installed}
            onClick={handleInstall}
            className={`px-6 py-2 rounded-lg text-white font-medium transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
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
