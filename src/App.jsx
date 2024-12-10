import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listearticles from "./assets/components/articles/Listearticles";
import Insertarticle from "./assets/components/articles/Insertarticle";
import Editarticle from "./assets/components/articles/Editarticle";
import Viewarticle from "./assets/components/articles/Viewarticle";
import Listcategories from "./assets/components/Categories/Listcategories";
import Insertcategorie from "./assets/components/Categories/Insertcategorie";
import Editcategorie from "./assets/components/Categories/Editcategorie";
import Viewcategorie from "./assets/components/categories/Viewcategorie";
import Listscategories from "./assets/components/Scategories/Listscategories";
import Viewscategorie from "./assets/components/Scategories/Viewscategorie";
import Editscategorie from "./assets/components/Scategories/Editscategorie";
import Insertscategorie from "./assets/components/scategories/insertscategorie";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./assets/components/Menu";
import ListArticleCard from "./assets/components/ListArticleCard";

const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/articles" exact element={<Listearticles />} />
          <Route path="/articles/add" element={<Insertarticle />} />
          <Route path="/article/edit/:id" element={<Editarticle />} />
          <Route path="/article/view/:id" element={<Viewarticle />} />
          <Route path="/categories" exact element={<Listcategories />} />
          <Route path="/categories/add" element={<Insertcategorie />} />

          <Route path="/categories/edit/:id" element={<Editcategorie />} />
          <Route path="/categories/view/:id" element={<Viewcategorie />} />
          <Route path="/scategories" exact element={<Listscategories />} />
          <Route path="/scategories/add" element={<Insertscategorie />} />
          <Route path="/scategories/edit/:id" element={<Editscategorie />} />
          <Route path="/scategories/view/:id" element={<Viewscategorie />} />
          <Route path="/articlescard" element={<ListArticleCard />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
