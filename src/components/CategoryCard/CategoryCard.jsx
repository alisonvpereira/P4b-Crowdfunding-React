import React from "react";
import { Link, useParams } from "react-router-dom";
import CategoryInfoModal from "../Modals/CategoryInfoModal";
import useModal from "../Modals/useModal";
import LoginModal from "../Modals/LoginModal";

function CategoryCard(props) {
  //variables
  const { categoryData } = props;
  const { key } = props;

  const { isShowing, toggle } = useModal();

  //template
  return (
    <div className="category-card">
      {localStorage.username ? (
        <Link to={`/category/${categoryData.name}`}>
          <img alt="" src={categoryData.image} />
          <h3>{categoryData.name}</h3>
        </Link>
      ) : (
        <div className="category-card">
          <img alt="" src={categoryData.image} />
          <button className="button-default" onClick={toggle}>
            <h3>{categoryData.name}</h3>
          </button>

          <LoginModal isShowing={isShowing} hide={toggle} />
        </div>
      )}
    </div>
  );
}

export default CategoryCard;
