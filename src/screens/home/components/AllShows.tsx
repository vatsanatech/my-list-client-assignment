import { useFetch } from "@/hooks/useFetch";
import { Calendar, Film, User } from "lucide-react";

export const AllShows = () => {
  const { data: shows } = useFetch();
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        Movie Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shows.map((movie) => (
          <div
            key={movie.title}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {movie.title}
              </h2>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(movie.releaseDate).getFullYear()}
              </div>
              <div className="h-24 mb-4 overflow-y-auto">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {movie.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex items-center mb-2 text-sm text-gray-700 dark:text-gray-300">
                <Film className="w-4 h-4 mr-2" />
                <span className="font-medium">{movie.director}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <User className="w-4 h-4 mr-2" />
                <span>{movie.actors.join(", ")}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
