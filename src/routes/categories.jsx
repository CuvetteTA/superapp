import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/categories.js";

import "../index.css";
import styles from "./categories.module.css";

const CategoriesPage = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const toggleCategory = (category) => {
    setSelected((prev) =>
      prev.some((c) => c.name === category.name)
        ? prev.filter((c) => c.name !== category.name)
        : [...prev, {name: category.name, genreId: category.genreId}]
    );
  };

  const saveCategories = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      console.error("User not found in localStorage");
      navigate("/login");
    }
    const categoryArray = []
    // Loop through each selected category object (with keys 'name' and 'genreId')
    for(let category of selected) {
      // Extract and add the 'name' value to categoryArray
      categoryArray.push(category.name)
    }
    user.categories = categoryArray;
    localStorage.setItem("user", JSON.stringify(user));
    // store the selected array (which contains 'name' and 'genreId') in localStorage
    localStorage.setItem("selectedCategories", JSON.stringify(selected))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    saveCategories();
    navigate("/");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      console.error("User not found in localStorage");
      navigate("/login");
    }

    // if user has already selected categories, redirect to dashboard
    // TODO: maybe allow user to change categories later
    if (user.categories.length > 0) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className="appName">Super app</h1>
        <h2 className={styles.title}>Choose your entertainment category</h2>
        <div
          className={`${styles.selectedCategories} ${
            selected.length > 0 ? styles.visible : styles.hidden
          }`}
        >
          {selected.map((category) => (
            <span key={category.name} className={styles.selectedCategory}>
              {category.name}{" "}
              <button onClick={() => toggleCategory(category)}>x</button>
            </span>
          ))}
        </div>
        {
          <p
            className={`${styles.warning} ${
              selected.length < 3 ? styles.visible : styles.hidden
            }`}
          >
            Minimum 3 category required
          </p>
        }
      </div>

      <div className={styles.rightSection}>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <button
              key={category.name}
              className={styles.categoryButton}
              style={{
                backgroundColor: category.color,
                boxShadow: selected.some(c => c.name === category.name)
                  ? "0 0 0 4px #148A14" // border hack
                  : "none",
              }}
              onClick={() => toggleCategory(category)}
            >
              <h3>{category.name}</h3>
              <img src={category.image} alt={category.name} />
            </button>
          ))}
        </div>
        <div className={styles.nextButtonContainer}>
          <button
            className={styles.nextButton}
            disabled={selected.length < 3}
            onClick={handleSubmit}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
