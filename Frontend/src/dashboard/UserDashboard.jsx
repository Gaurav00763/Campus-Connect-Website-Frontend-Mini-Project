import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <main className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-slate-500">
            Here is what's happening with your campus profile today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800">
                Events & Workshops
              </h3>
              <span className="text-md text-slate-600 font-medium">
                Registered Activities
              </span>
            </div>
            <div className="space-y-4">
              {user?.registeredEvents.map(event => {
                return (
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 items-center flex gap-4 hover:shadow-md transition cursor-pointer">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg"></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900">
                        {event.title}
                      </h4>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-slate-500 mt-1">
                            Date:{" "}
                            {new Date(event.startDate).toLocaleDateString()
                            !== new Date(event.endDate).toLocaleDateString() ? (
                              <>
                                {new Date(event.startDate).toLocaleDateString()}{" "}
                                to{" "}
                                {new Date(event.endDate).toLocaleDateString()}
                              </>
                            ) : (
                              new Date(event.startDate).toLocaleDateString()
                            )}
                          </p>
                          <p className="text-sm text-slate-500 mt-1">
                            {event.startTime === event.endTime ? (
                              <>{event.startTime}</>
                            ) : (
                              <>
                                {event.startTime} to {event.endTime}
                              </>
                            )}
                          </p>
                        </div>
                        <Link
                          to={`/events/${event._id}`}
                          className=" text-white bg-green-500 px-2 py-1 rounded-lg"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800">
                Placement Drives
              </h3>
              <span className="text-md text-slate-600 font-medium">
                Enrolled Drives
              </span>
            </div>
            <div className="space-y-4">
              {user?.registeredDrives.map(event => {
                return (
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-blue-500"></div>
                        <div>
                          <h4 className="font-bold text-slate-900 leading-tight">
                            {event.company}
                          </h4>
                          <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                            {event.role}
                          </p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-[10px] font-bold rounded">
                        Applied
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-500 border-t pt-3">
                      <span className="text-md font-bold">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
