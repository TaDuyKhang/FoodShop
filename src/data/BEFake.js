import { getAllByAltText } from "@testing-library/dom";
import product from "./Product.json";
import MockUsers from "./User.json";

export function getAll() {
  return product;
}

// export function findProduct(productName){
//     product
// }

export function checkLogin(userName, passWord) {
  const userData = MockUsers.user.find(
    (user) => user.username === userName && user.password === passWord
  );

  return userData;
}

export function getProductByCategory(Category) {
  const ProductByCategory = product.product.filter(
    (value, index) => Category === value.category
  );
  return ProductByCategory;
}

export function getCategory() {
  const allCategory = product.product.map((value, index) => value.category);
  const category = allCategory.filter(
    (value, index) => allCategory.indexOf(value) === index
  );
  return category;
}

export function findByText(text) {
  // const productByText = product.product.map((value,index) =>

  // )
  return product.product.filter((value) =>
    value.name.match(text.toUpperCase())
  );
}
