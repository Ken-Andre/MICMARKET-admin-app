import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getStartups } from "../features/startup/startupSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const columns = [
  // {
  //   title: "SNo",
  //   dataIndex: "key",
  // },
  {
    title: "Id",
    dataIndex: "sid",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  // {
  //   title: "Email",
  //   dataIndex: "email",
  // },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Total Rating",
    dataIndex: "totalrating",
  },
  // {
  //   title: "Price",
  //   dataIndex: "price",
  // },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Startuplist = () => {
  const dispatch = useDispatch();
  let isVerified = "";
  useEffect(() => {
    dispatch(getStartups());
  }, []);
  const startupState = useSelector((state) => state.startup.startups);
  const data1 = [];
  for (let i = 0; i < startupState.length; i++) {
    // if(startupState[i].role === "user"){
    if (startupState[i].isVerified) {
      isVerified = "Verified";
    } else {
      isVerified = "Not Verified";
    }
    data1.push({
      key: i + 1,
      sid: startupState[i]._id,
      name: startupState[i].name,
      email: startupState[i].email,
      category: startupState[i].category,
      totalrating: startupState[i].totalratings,
      price: `$ ${startupState[i].price}`,
      // isVerified: startupState[i].isVerified,
      status: isVerified,
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
    console.log(`The data ${i}:`, data1);
    // }
  }
  return (
    <div>
      <h3 className="mb-4 title">Startups</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Startuplist;
