import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "../Components/Protected";
import EditMusicRecord from "./EditMusicRecord";
import HomePage from "./HomePage";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import SingleMusicRecord from "./SingleMusicRecord";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <HomePage />
          </Protected>
        }
      />
      <Route path="/music/:id" element={<SingleMusicRecord />} />
      <Route path="/music/:id/edit" element={<EditMusicRecord />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
