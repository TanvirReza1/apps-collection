import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";
import Loading from "../Components/Loading";

const MyInstallation = () => {
  const allApps = useLoaderData(); // all apps
  const [installedApps, setInstalledApps] = useState([]);

  // 🔹 Load installed apps on page load
  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("installedApps")) || [];

    const filteredApps = allApps.filter((app) => ids.includes(app.id));

    setInstalledApps(filteredApps);
  }, [allApps]);

  // 🔹 Uninstall handler
  const handleUninstall = (id) => {
    const ids = JSON.parse(localStorage.getItem("installedApps")) || [];

    const updatedIds = ids.filter((appId) => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedIds));

    // Update UI
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));

    toast.success("App Uninstalled Successfully");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Your Installed Apps</h2>

      <p className="mb-4 text-gray-600">{installedApps.length} Apps Found</p>

      {installedApps.length === 0 && <p>No apps installed</p>}

      <div className="space-y-4">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <div>
              <h3 className="font-semibold">{app.title}</h3>
              <p className="text-sm text-gray-500">
                ⭐ {app.ratingAvg} • {app.size} MB
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
