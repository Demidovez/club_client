import styles from "./Category.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useGetMaterialsQuery } from "../../store/api/materialsService";
import CardMaterial from "../../components/CardMaterial/CardMaterial";
import { useEffect } from "react";
import { PAGES_PATH } from "../../types/types";

function Category() {
  const { name } = useParams();
  const navigate = useNavigate();

  // TODO: name || "" - temp decision
  const {
    data: materialsData,
    // isLoading,
    // error,
    isError,
  } = useGetMaterialsQuery(name);

  useEffect(() => {
    if (isError) {
      navigate(PAGES_PATH.notFound);
    }
  }, [isError, materialsData, navigate]);

  const goToMaterial = (material: string) => {
    navigate(`/material/${material}`);
  };

  return (
    <div className={styles.container}>
      <h1>{materialsData?.category}</h1>
      <div className={styles.materials}>
        {materialsData?.data &&
          materialsData.data.map((material) => (
            <CardMaterial
              data={material}
              key={material.id}
              onClick={goToMaterial}
            />
          ))}
      </div>
    </div>
  );
}

export default Category;
