import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../features/category/categorySlice";
const columns = [
  // isBlocked
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.length - b.name.length,
  },
//   {
//     title: "Email",
//     dataIndex: "email",
//     sorter: (a, b) => a.email.length - b.email.length,
//   },
//   {
//     title: "Mobile",
//     dataIndex: "mobile",
//     sorter: (a, b) => a.mobile.length - b.mobile.length,
//   },
//   {
//     title: "Role",
//     dataIndex: "role",
//   },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
];

const Category = () => {
  const dispatch = useDispatch();
  let isBlocked = "";
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const categoryState = useSelector((state) => state.category.category);
  const data1 = [];
  for (let i = 0; i < categoryState.length; i++) {

      if (categoryState[i].isBlocked) {
        isBlocked = "Blocked";
      } else {
        isBlocked = "Not Blocked";
      }
      data1.push({
        key: i + 1,
        name: categoryState[i].name,
        // email: categoryState[i].email,
        // mobile: categoryState[i].mobile,
        // role: categoryState[i].role,
        // status: toString(categoryState[i].isBlocked),
        category: categoryState[i].category,
      });
      // console.log(`The data ${i}:`, data1);

  }

  return (
    <div>
      <h3 className="mb-4 title">Category</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Category;
