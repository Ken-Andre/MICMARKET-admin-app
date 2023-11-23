import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { toast } from "react-toastify";
// import { InboxOutlined } from "@ant-design/icons";
// import { message, Upload } from "antd";
import { getCategory } from "../features/category/categorySlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Radio } from "antd";
import { createStartups, resetState } from "../features/startup/startupSlice";

const verifiedoptions = [
  {
    label: "Yes",
    value: true,
  },
  {
    label: "No",
    value: false,
  },
  // {
  //   label: 'Orange',
  //   value: 'Orange',
  //   disabled: true,
  // },
];
// const { Dragger } = Upload;
// const props = {
//   name: "file",
//   multiple: true,
//   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (status === "done") {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log("Dropped files", e.dataTransfer.files);
//   },
// };
let schema = Yup.object().shape({
  s_name: Yup.string().required("A startup name is Required"),
  description: Yup.string().required("A description is Required !"),
  website: Yup.string(),
  s_address: Yup.string().required("The Startup address/location is Required"),
  s_email: Yup.string().required("A Startup email is Required"),
  s_mobile: Yup.number().required("A Startup number is Required"),
  market_value: Yup.number().required("A Startup market value is Required"),
  category: Yup.string().required("You must choose one of these categories !"),
  subcategory: Yup.string().required("A Startup subcategory is Required"),
  price: Yup.number()
    .min(0.1, "The price of your shares should be above 0.1 unit!")
    .required("A Startup price is Required"),
  quantity: Yup.number()
    .min(0, "A quantity can't be negative ;)")
    .required("A Startup quantity is Required"),
  sell: Yup.number().required("A Startup sell is Required"),
  isVerified: Yup.boolean(),
});

const Addstartup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [images, setImages] = useState([]);
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const catState = useSelector((state) => state.category.category);
  const formik = useFormik({
    initialValues: {
      s_name: "",
      description: "",
      isVerified: false,
      website: "",
      s_address: "",
      s_email: "",
      s_mobile: "",
      market_value: "",
      category: "",
      subcategory: "",
      price: "",
      quantity: "",
      sell: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createStartups(values));
      formik.resetForm();
      alert(JSON.stringify(values, null, "is sending"));
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });
  const [isVerifiedValue, setisVerifiedValue] = useState(false);
  const isVerifiedValueChanged = ({ target: { value } }) => {
    console.log("isVerified radio checked", value);
    setisVerifiedValue(value);
  };
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Startup</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          {/* Startup's name */}
          <div className="mb-3">
            <CustomInput
              type="text"
              label="Enter Startup's name"
              name="s_name"
              onChng={formik.handleChange("s_name")}
              onBlur={formik.handleBlur("s_name")}
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
              onChng={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
              name="description"
              placeholder="Describe as well you can the startup"
              required
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
          </div>
          {/* website url */}
          <CustomInput
            type="text"
            label="Url of your website"
            onChng={formik.handleChange("website")}
            onBlur={formik.handleBlur("website")}
            name="website"
          />
          {/* address */}
          <CustomInput
            type="text"
            label="Enter Startup's address(*)"
            onChng={formik.handleChange("s_address")}
            onBlur={formik.handleBlur("s_address")}
            name="s_address"
            required
          />
          {/* email */}
          <CustomInput
            type="email"
            label="Enter Startup's email(*)"
            onChng={formik.handleChange("s_email")}
            onBlur={formik.handleBlur("s_email")}
            name="s_email"
            required
          />
          {/* Mobile number */}
          <CustomInput
            type="tel"
            label="Enter Startup Mobile Number(*)"
            onChng={formik.handleChange("s_mobile")}
            onBlur={formik.handleBlur("s_mobile")}
            name="s_mobile"
            required
          />
          {/* Market Value */}
          <CustomInput
            type="number"
            label="How many is your capital ?"
            onChng={formik.handleChange("market_value")}
            onBlur={formik.handleBlur("market_value")}
            value={formik.values.market_value}
            name="market_value"
          />
          {/* Category enum */}
          <label>Category</label>
          {/* <select
            onChng={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
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
          </select> */}
          <div className="">
            <select
              name="category"
              onChange={formik.handleChange("category")}
              onBlur={formik.handleBlur("category")}
              value={formik.values.category}
              className="form-control py-3 mb-3 custom-scrollbar"
              id=""
              size="5"
              onmousedown="this.size=this.options.length;"
              onblur="this.size=5;"
              onchange="this.size=5; this.blur();"
            >
              <option value="">Select Category</option>
              {catState.map((i, j) => {
                return (
                  <option key={j} value={i.title}>
                    {i.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          {/* Subcategory */}
          <CustomInput
            type="text"
            label="Your Subcategory"
            onChng={formik.handleChange("subcategory")}
            onBlur={formik.handleBlur("subcategory")}
            name="subcategory"
            required
          />
          {/* Price of an action shares */}
          <CustomInput
            type="number"
            label="Price of one of your startup's action/shares (min:0)?"
            onChng={formik.handleChange("price")}
            onBlur={formik.handleBlur("price")}
            name="price"
            required
          />
          {/* Quantity numbers max of action that can be sold */}
          <CustomInput
            type="number"
            label="Numbers max of action that can be sold (min:0)?"
            onChng={formik.handleChange("quantity")}
            onBlur={formik.handleBlur("quantity")}
            name="quantity"
            required
          />
          {/* Sell How many actions/ have you already sold until now ? */}
          <CustomInput
            type="number"
            label="How many actions/ have you already sold until now (min:0)?"
            onChng={formik.handleChange("sell")}
            onBlur={formik.handleBlur("sell")}
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
              onChng={formik.handleChange("isVerified")}
              onBlur={formik.handleBlur("isVerified")}
              name="isVerified"
              optionType="button"
              buttonStyle="solid"
            />
          </div>
          {/* Images Logo brand and other files upload */}
          {/* <Dragger {...props}>
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
          </Dragger> */}
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
  );
};

export default Addstartup;
