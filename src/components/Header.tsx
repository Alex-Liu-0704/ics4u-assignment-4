import { Link } from '@/components';

export const Header = () => {
  return (
    <header>
      <nav className="flex gap-4 p-4 bg-gray-800">
        <h1 className="text-2xl font-bold text-white-900">TMDB Explorer</h1>
        <Link to="/movies/category/now_playing">Movies</Link>
        <Link to="/trending/movies?interval=day">Trending</Link>
        <Link to="/search">Search</Link>
        <Link to="/genre">Genre</Link>
      </nav>
    </header>
  );
};
