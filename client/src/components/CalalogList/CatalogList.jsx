import React  from "react";
import "./CatalogList.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";


const CatalogList = ({  catId, cats }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&${catId}${cats.map(
            (item) => `&[filters][categories][id][$eq]=${item}`
        )}`
    );

  return (
      <div className="catalog-item-box" >
        {loading
            ? "loading"
            : data?.slice(0,8).map((item) => <Card item={item} key={item.id} />)}
      </div>
  );
};

export default CatalogList;