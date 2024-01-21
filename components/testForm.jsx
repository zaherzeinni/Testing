import * as React from "react";

import {
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { nanoid } from "nanoid";
import { PostAdd } from "../redux/postSlice";
import { setName,setAge,setEmail } from "../redux/testSlice";

import { useDispatch,useSelector } from "react-redux";


export default function TestForm({ users }) {

  const testName = useSelector((state) => state.test);
  const testAge = useSelector((state) => state.test);
  const testEmail = useSelector((state) => state.test);
  
  const dispatch = useDispatch();

  return (
    <Box
      bgcolor={"primary"}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          onChange={(e) => dispatch(setName(e.target.value))}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
      </div>

      <div>
        {/* callback function */}
        <Button 
        onClick={()=> dispatch(setAge())}
        //onClick={()=> dispatch(setAge(testAge.age+1))}      method two
        >
            click me
            </Button>
            <div>
             Name:   {testName.name}
            </div>
        <div>
     Email:   {testEmail.email}
        </div>
        <div>
      Age:  {testAge.age}
        </div>
      </div>
    </Box>
  );
}
