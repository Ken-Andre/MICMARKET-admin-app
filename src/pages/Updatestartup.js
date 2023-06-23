import { React, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Radio } from 'antd';
import { Link, useNavigate, useParams } from "react-router-dom";

const verifiedoptions = [
  {
    label: 'Yes',
    value: true,
  },
  {
    label: 'No',
    value: false,
  },
  // {
  //   label: 'Orange',
  //   value: 'Orange',
  //   disabled: true,
  // },
];
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Updatestartup = () => {
  const { id } = useParams();
  const [isVerifiedValue, setisVerifiedValue] = useState(false);
  const isVerifiedValueChanged = ({ target: { value } }) => {
    console.log('isVerified radio checked', value);
    setisVerifiedValue(value);
  };
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };
    return (
    <div>
      <h3 className="mb-4 title">Update user {id} </h3>
      <div>
        <form>
          {/* Startup's name */}
          <div className="mb-3">
          <CustomInput
            type="text"
            label="Enter Startup's name"
            name="name"
            required
          />
          </div>
          {/* description string */}
          <div className="mb-3">
            <label>Description</label>
            <ReactQuill
              theme="snow"
              id="desc"
              value={desc}
              name="description"
              placeholder="Describe as well you can the startup"
              required
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
          </div>
          {/* website url */}
          <CustomInput type="text" label="Url of your website" name="website" />
          {/* address */}
          <CustomInput
            type="text"
            label="Enter Startup's address(*)"
            name="address"
            required
          />
          {/* email */}
          <CustomInput
            type="email"
            label="Enter Startup's email(*)"
            name="email"
            required
          />
          {/* Mobile number */}
          <CustomInput
            type="tel"
            label="Enter Startup Number(*)"
            name="mobile"
            required
          />
          {/* Market Value */}
          <CustomInput
            type="number"
            label="How many is your capital ?"
            name="market_value"
          />
          {/* Category enum */}
          <label>Category</label>
          <select
            name="category"
            className="form-control py-3 mb-3"
            id="categoryinput"
            required
          >
            <option value="">Select Category Branch</option>
            <option value="Services Technologiques">
              Services Technologiques
            </option>
            <option value="FinTech">FinTech</option>
            <option value="BioTech">BioTech</option>
            <option value="HealthTech">HealthTech</option>
            <option value="CleanTech">CleanTech</option>
            <option value="AgTech">AgTech</option>
            <option value="EdTech">EdTech</option>
          </select>
          {/* Subcategory */}
          <CustomInput
            type="text"
            label="Your Subcategory"
            name="subcategory"
            required
          />
          {/* Price of an action shares */}
          <CustomInput
            type="number"
            label="Price of one of your startup's action/shares (min:0)?"
            name="price"
            required
          />
          {/* Quantity numbers max of action that can be sold */}
          <CustomInput
            type="number"
            label="Numbers max of action that can be sold (min:0)?"
            name="quantity"
            required
          />
          {/* Sell How many actions/ have you already sold until now ? */}
          <CustomInput
            type="number"
            label="How many actions/ have you already sold until now (min:0)?"
            name="sell"
            required
          />
          {/* isVerified */}
          <div className="py-2 my-1">
          <label className="inline">Is Verified :</label>
          <Radio.Group
            options={verifiedoptions}
            onChange={isVerifiedValueChanged}
            value={isVerifiedValue}
            optionType="button"
            buttonStyle="solid"
          />
          </div>
          {/* Images Logo brand and other files upload */}
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other brand files
            </p>
          </Dragger>
          {/* Submit Button */}
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Startup
          </button>
        </form>
      </div>
    </div>

  )
}

export default Updatestartup
