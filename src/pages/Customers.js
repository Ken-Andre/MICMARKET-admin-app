import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/customerSlice";
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
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email.length - b.email.length,
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    sorter: (a, b) => a.mobile.length - b.mobile.length,
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.status.length - b.status.length,
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  let isBlocked = "";
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const customerState = useSelector((state) => state.customer.customers);
  const data1 = [];
  for (let i = 0; i < customerState.length; i++) {
    if (customerState[i].role === "user") {
      if (customerState[i].isBlocked) {
        isBlocked = "Blocked";
      } else {
        isBlocked = "Not Blocked";
      }
      data1.push({
        key: i + 1,
        name: customerState[i].firstname + " " + customerState[i].lastname,
        email: customerState[i].email,
        mobile: customerState[i].mobile,
        role: customerState[i].role,
        // status: toString(customerState[i].isBlocked),
        status: isBlocked,
      });
      // console.log(`The data ${i}:`, data1);
    }
  }

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
