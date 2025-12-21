import { useEffect, useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";

const MyInstallation = () => {
  const allApps = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  // 🔹 Load installed apps
  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("installedApps")) || [];
    const filteredApps = allApps.filter((app) => ids.includes(app.id));
    setInstalledApps(filteredApps);
  }, [allApps]);

  // 🔹 Derived sorted apps (NO state mutation)
  const sortedApps = useMemo(() => {
    if (!sortOrder) return installedApps;

    return [...installedApps].sort((a, b) => {
      if (sortOrder === "high-low") return b.downloads - a.downloads;
      if (sortOrder === "low-high") return a.downloads - b.downloads;
      return 0;
    });
  }, [installedApps, sortOrder]);

  // 🔹 Uninstall handler
  const handleUninstall = (id) => {
    const ids = JSON.parse(localStorage.getItem("installedApps")) || [];
    const updatedIds = ids.filter((appId) => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedIds));

    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
    toast.success("App Uninstalled Successfully");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold">Your Installed Apps</h2>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">Sort by Downloads</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>

      <p className="mb-4 text-gray-600">{sortedApps.length} Apps Found</p>

      {sortedApps.length === 0 && (
        <p className="text-gray-500">No apps installed</p>
      )}

      <div className="space-y-4">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <div>
              <h3 className="font-semibold">{app.title}</h3>
              <p className="text-sm text-gray-500">
                ⬇ {app.downloads.toLocaleString()} downloads • ⭐{" "}
                {app.ratingAvg}
              </p>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-green-500 text-white px-4 py-1 rounded"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyInstallation;
