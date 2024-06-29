import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Homepage from "../pages";
import Blog from "../pages/blogs";
import About from "../pages/About";
import SinglePost from "../pages/blogs/_id";

import ErrorPage from "../components/ErrorPage";
import { posts, postsById } from "../apis/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <SinglePost></SinglePost>,
        loader: postsById,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
