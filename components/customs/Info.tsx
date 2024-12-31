import { ChevronRightIcon } from "lucide-react";
import React from "react";

export const InfoPage = () => {
  return (
    <section className="bg-black py-16 px-6 text-zinc-100">
      {" "}
      <div className="max-w-5xl mx-auto">
        {" "}
        <div className="mb-12 text-center">
          {" "}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {" "}
            About<span className="text-yellow-400">.</span>{" "}
          </h2>{" "}
          <p className="mt-4 text-lg text-zinc-400">
            {" "}
            A glimpse into my background and interests.{" "}
          </p>{" "}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Languages_
            </h3>
            <ul className="space-y-3">
              {["English", "Hindi"].map((lang, index) => (
                <li
                  key={lang}
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 backdrop-filter backdrop-blur-sm"
                >
                  <span className="font-medium">{lang}</span>
                  <span className="text-sm text-zinc-400">
                    {index === 0 ? "Fluent" : "Native"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Extra Curricular
            </h3>
            <div className="p-4 rounded-lg bg-zinc-800/50 backdrop-filter backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl" role="img" aria-label="Music">
                    🎵
                  </span>
                  <span className="font-medium">Tabla Artist</span>
                </div>
              </div>
              <span className="block mt-2 text-sm text-zinc-400 text-bold ml-6">
                Completed Masters in Tabla from Prayag sangeet Samiti, Allahabad
              </span>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
          >
            <span className="font-medium">Learn more about me</span>
            <ChevronRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
