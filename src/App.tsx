import { MainLayout } from '@/layouts/MainLayout';
import { CareerView, CreditsView, EpisodeView, ErrorView, GenreView, HomeView, MovieView, MoviesView, PersonView, ReviewsView, SearchView, SeasonsView, TelevisionView, TrailersView, TrendingView } from '@/views';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route element={<MainLayout />}>
        <Route path="/movies/category/:category" element={<MoviesView />} />
        <Route path="/tv/category/:category" element={<TelevisionView />} />
        <Route path="/trending/:category" element={<TrendingView />} />
        <Route path="/genre/:category/:genre" element={<GenreView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/:category/:id" element={<MovieView />}>
          <Route path="seasons" element={<SeasonsView />} />
          <Route path="season/:season" element={<EpisodeView />} />
          <Route path="credits" element={<CreditsView />} />
          <Route path="trailers" element={<TrailersView />} />
          <Route path="reviews" element={<ReviewsView />} />
        </Route>
        <Route path="/person/:id" element={<PersonView />}>
          <Route path="career" element={<CareerView />} />
          {/* <Route path="images" element={<ImagesView />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};
