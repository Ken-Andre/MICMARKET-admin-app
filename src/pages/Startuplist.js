import React from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Startup",
    dataIndex: "startup",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Michelle Sonpoho ${i}`,
    startup: 32,
    staus: `Cameroon, Douala Yansoki no. ${i}`,
  });
}
const Startuplist = () => {
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
