import { MainLayout } from '@/layouts/MainLayout';
import { CreditsView, ErrorView, HomeView, MovieView, MoviesView, ReviewsView, SearchView, TrendingView } from '@/views';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route element={<MainLayout />}>
        <Route path="/movies" element={<Navigate to="/movies/category/now_playing" replace />} />
        <Route path="/movies/category/:category" element={<MoviesView />} />
        <Route path="/trending" element={<TrendingView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/movie/:id" element={<MovieView />}>
          <Route path="credits" element={<CreditsView />} />
          <Route path="reviews" element={<ReviewsView />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};
