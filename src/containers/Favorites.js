import "./Products.css";
import { useStore } from "../hooks-store/store";
import FavoriteItem from "../components/Favorites/FavoriteItem";

const Favorites = (props) => {
  const [state, dispatch] = useStore();

  const favoriteProducts = state.products.filter((item) => {
    return item.isFavorite;
  });
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
