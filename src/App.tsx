import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddMaterial from "./pages/AddMaterial/AddMaterial";
import Categories from "./pages/Categories/Categories";
import Category from "./pages/Category/Category";
import Feed from "./pages/Feed/Feed";
import Home from "./pages/Home/Home";
import Material from "./pages/Material/Material";
import NotFound from "./pages/NotFound/NotFound";
import Settings from "./pages/Settings/Settings";
import User from "./pages/User/User";
import Users from "./pages/Users/Users";
import { PAGES_PATH } from "./types/types";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="category/:name" element={<Category />} />
        <Route path="material/:name" element={<Material />} />
        <Route path="feed" element={<Feed />} />
        <Route path="user" element={<User />} />
        <Route path="add" element={<AddMaterial />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        {["*", PAGES_PATH.notFound].map((path) => (
          <Route path={path} element={<NotFound />} key={path} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
