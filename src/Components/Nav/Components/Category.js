import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [
        {
          categoryId: 1,
          categoryIcon: '❤︎',
          categoryName: '채소',
        },
        {
          categoryId: 2,
          categoryIcon: '❤︎',
          categoryName: '과일･견과･쌀',
        },
      ],
      subcategoryList: [
        {
          subcategoryId: 1,
          subcategoryName: '친환경',
        },
        {
          subcategoryId: 2,
          subcategoryName: '고구마･감자･당근',
        },
        {
          subcategoryId: 3,
          subcategoryName: '시금치･쌈채소･나물',
        },
        {
          subcategoryId: 4,
          subcategoryName: '브로콜리･파프리카･양배추',
        },
        {
          subcategoryId: 5,
          subcategoryName: '양파･대파･마늘･배추',
        },
        {
          subcategoryId: 6,
          subcategoryName: '오이･호박･고추',
        },
        {
          subcategoryId: 7,
          subcategoryName: '냉동･이색･간편채소',
        },
        {
          subcategoryId: 8,
          subcategoryName: '콩나물･버섯',
        },
      ],
      isSubCategoryShown: false,
    };
  }

  // componentDidMount() {
  //   const { categoryList, subcategoryList } = this.state;
  //   fetch('http://localhost:3000/data/category.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(categoryData => {
  //       categoryData.map(categoryItem => {
  //         this.setState({
  //           categoryList: [
  //             ...categoryList,
  //             [
  //               categoryItem.categoryId,
  //               categoryItem.categoryIcon,
  //               categoryItem.categoryName,
  //             ],
  //           ],
  //           subcategoryList: subcategoryList.concat([categoryItem.subcategory]),
  //         });
  //       });
  //     });
  // }

  handleMouseOnSubCategory = () => {
    this.setState({
      isCategoryShown: true,
    });
  };

  handleMouseOffSubCategory = () => {
    this.setState({
      isCategoryShown: false,
    });
  };

  handleSubcategory = () => {
    const { subcategoryList, categoryList } = this.state;
    this.setState({
      subcategoryList: categoryList.map(category => {
        return category.subcategory;
      }),
    });
  };

  render() {
    const { isCategoryShown, categoryList, subcategoryList } = this.state;
    const { handleMouseOffCategory } = this.props;
    const { handleSubcategory } = this;
    console.log(subcategoryList);
    return (
      <div className="category-all">
        <div
          className="category-container"
          onMouseLeave={handleMouseOffCategory}
        >
          <ul className="category-list">
            {categoryList.map(category => {
              return (
                <li key={category.categoryId}>
                  <i>{category.categoryIcon}</i>
                  <Link>{category.categoryName}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="subcategory-list">
            {subcategoryList &&
              subcategoryList.map(item => {
                return <li key="item.subcategoryId">{item.subcategoryName}</li>;
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Category;
