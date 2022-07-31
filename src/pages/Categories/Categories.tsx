import CardCategory from "../../components/CardCategory/CardCategory";
import { useGetCategoriesQuery } from "../../store/api/materialsService";
import styles from "./Categories.module.scss";
import { useNavigate } from "react-router-dom";
import CardCategorySkeleton from "../../components/CardCategorySkeleton/CardCategorySkeleton";

function Categories() {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  const navigate = useNavigate();

  const goToCategory = (category: string) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className={styles.container}>
      <h1>Все материалы</h1>
      <div className={styles.categories}>
        {isLoading
          ? Array(8)
              .fill("")
              .map((_, index) => <CardCategorySkeleton key={index} />)
          : categories?.map((category) => (
              <CardCategory
                data={category}
                key={category.id}
                onClick={goToCategory}
              />
            ))}
      </div>
    </div>
  );
}

export default Categories;
