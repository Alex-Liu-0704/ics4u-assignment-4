// originally was now playing view, currently editing to make movies view and can change between the 4 endpoints
import { ImageGrid, LinkGroup, Pagination } from '@/components';
import { MOVIE_ENDPOINT, NOW_PLAYING_ENDPOINT } from '@/core/constants';
import type { MoviesResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const NowPlayingView = () => {
  const { endpoint } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const { data } = useTmdb<MoviesResponse>(`${MOVIE_ENDPOINT}/${endpoint}`, { page }, [page, endpoint]);

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.poster_path,
    primaryText: result.original_title,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-5">
      <LinkGroup
        options={[
          { label: "Now Playing", to: "/movies/category/now_playing" },
          { label: "Popular", to: "/movies/category/popular" },
          { label: "Top Rated", to: "/movies/category/top_rated" },
          { label: "Upcoming", to: "/movies/category/upcoming" },
        ]} />
      {/* <h1 className="text-3xl font-bold mb-4">Now Playing</h1> */}
      <ImageGrid results={gridData} onClick={(id) => navigate(`/movie/${id}/credits`)} />
      <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
    </section>
  );
};
