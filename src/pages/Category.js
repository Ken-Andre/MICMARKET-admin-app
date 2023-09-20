import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../features/category/categorySlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
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
  {
    title: "Action",
    dataIndex: "action",
    sorter: (a, b) => a.action.length - b.action.length,
  },
];

const Category = () => {
  const dispatch = useDispatch();
  // let isBlocked = "";
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const categoryState = useSelector((state) => state.category.category);
  const data1 = [];
  for (let i = 0; i < categoryState.length; i++) {
    // if (categoryState[i].isBlocked) {
    //   isBlocked = "Blocked";
    // } else {
    //   isBlocked = "Not Blocked";
    // }
    data1.push({
      key: i + 1,
      name: categoryState[i].title,
      action: (
        <>
          <Link className="fs-3 " to="/">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
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
