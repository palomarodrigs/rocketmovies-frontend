import { BrowserRouter, Routes as RoutesList, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { NewMovie } from "../pages/NewMovie";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { MoviePreview } from "../pages/MoviePreview";

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesList>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newmovie" element={<NewMovie />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/moviepreview" element={<MoviePreview />} />
      </RoutesList>
    </BrowserRouter>
  );
}
