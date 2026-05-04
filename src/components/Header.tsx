import { LinkGroup } from '@/components';

export const Header = () => {
  return (
    <header>
      <nav className="flex gap-4 p-4 bg-gray-800">
        <h1 className="text-2xl font-bold text-white-900">TMDB Explorer</h1>
        <LinkGroup options={[
          {
            label: 'Movies', 
            to: '/movies/category/now_playing',
            match: ['/movies/category/:category']
          },
          { 
            label: 'TV', 
            to: '/tv/category/airing_today', 
            match: ['/tv/category/:category']
          },
          { 
            label: 'Trending', 
            to: '/trending/movies?interval=day',
            match: ['/trending/:category']
          },
          { 
            label: 'Genre', 
            to: '/genre/movies/action',
            match: ['/genre/:category/:genre']
          },
          { label: 'Search', to: '/search' },
        ]} />
      </nav>
    </header>
  );
};
