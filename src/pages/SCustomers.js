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
    sorter: (a,b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const SCustomers = () => {
  const dispatch = useDispatch();
  let isBlocked = "";
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const customerState = useSelector((state) => state.customer.customers);
  const data1 = [];
  for (let i = 0; i < customerState.length; i++) {
    if(customerState[i].role === "startup"){
      if (customerState[i].isBlocked) {
        isBlocked = "Blocked";
      } else {
        isBlocked = "Not Blocked";
      }
      data1.push({
        key: i+1,
        name: customerState[i].firstname + " " + customerState[i].lastname,
        email: customerState[i].email,
        mobile: customerState[i].mobile,
        role: customerState[i].role,
        // status: toString(customerState[i].isBlocked),
        status: isBlocked,
      });
      console.log(`The data ${i}:`, data1);
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

export default SCustomers;
