import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
      isSubOpen: false,
      categoryIdx: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/category.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(categoryData => {
        this.setState({
          categoryList: categoryData,
        });
      });
  }

  handleSubOn = e => {
    this.setState(
      {
        isSubOpen: true,
        categoryIdx: e.target.id,
      }
      // () => {
      //   console.log(this.state.categoryIdx);
      // }
    );
  };

  handleSubOff = e => {
    this.setState({
      isSubOpen: false,
    });
  };

  render() {
    const { categoryList, isSubOpen, categoryIdx } = this.state;
    const { handleSubOn, handleSubOff } = this;
    const { handleCategoryOff, navBarFixed } = this.props;

    return (
      <div
        className="category-container"
        id={navBarFixed ? 'category-fixed' : null}
        onMouseLeave={handleCategoryOff}
      >
        <ul className="category-all">
          {categoryList.map((item, idx) => {
            return (
              <li
                className="mapped-category"
                key={item.categoryId}
                onMouseEnter={handleSubOn}
                id={item.categoryId}
              >
                <div className="cat" id={item.categoryId}>
                  <i>{item.categoryIcon}</i>
                  <Link id={item.categoryId}>{item.categoryName}</Link>
                </div>

                {idx + 1 === Number(categoryIdx) && isSubOpen && (
                  <div className="subcategory-list" onMouseLeave={handleSubOff}>
                    {categoryList[categoryIdx - 1].subcategory.map(sub => {
                      return (
                        <div className="sub">
                          <Link to="/productlist">{sub.subcategoryName}</Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Category;
