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
    fetch('/data/category.json')
      .then(res => res.json())
      .then(categoryList => this.setState({ categoryList }));
  }

  handleSubOn = e => {
    this.setState({
      isSubOpen: true,
      categoryIdx: e.target.id,
    });
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
        className={`category-container ${navBarFixed ? 'category-fixed' : ''}`}
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
                  <Link id={item.categoryId}>{item.categoryName}</Link>
                </div>
                {idx + 1 === Number(categoryIdx) && isSubOpen && (
                  <div className="subcategory-list" onMouseLeave={handleSubOff}>
                    {categoryList[categoryIdx - 1].subcategory.map(sub => {
                      return (
                        <div key={sub.subcategoryId} className="sub">
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
