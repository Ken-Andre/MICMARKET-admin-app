import React, { useState } from "react";
import { FormControl, Input, FormHelperText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
const Updatestartupdis = () => {
  const navigate = useNavigate();
  const [user_id,setuser_id] = useState("");
  return (
    <>
      <FormControl className="d-flex align-items-center py-4  form-signin m-auto">
        {/* <label htmlFor="my-input">Email address</label>
        <Input id="my-input" aria-describedby="my-helper-text" /> */}

        <form>
          <div class="d-flex align-items-center form-control">
            <FormHelperText id="my-helper-text">
              Enter here the id of the user picked from user list.
            </FormHelperText>
            <div className="center input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search id"
                aria-label="Search"
                aria-describedby="search-addon"
                value={user_id}
                onChange={(e) => setuser_id(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  if (user_id) {
                    navigate(`${user_id}`);
                  } else {
                    navigate("#");
                  }
                }}
              >
                <SearchIcon />
              </button>
            </div>
          </div>
        </form>
      </FormControl>
    </>
  );
};

export default Updatestartupdis;
