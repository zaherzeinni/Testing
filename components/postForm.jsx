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
import { useDispatch } from "react-redux";



export default function FormPropsTextFields({ users }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [userId, setUserId] = useState("");
// dispatch to excute the function from redux-toolkit
const dispatch = useDispatch();

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  const onSavePostClicked = (e) => {
    
    e.preventDefault();

    const data = {
      id: nanoid(8),
      title: title,
      content: content,
      userId: userId,
      date: new Date().toISOString(),
      
    };

    console.log(data,"this is my data");
    dispatch(PostAdd(data))
    // PostAdd(data)--> action payload
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  
  
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
          label="Title"
          defaultValue=""
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <TextField
          required
          id="outlined-required"
          label="Content"
          defaultValue=""
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div>
        <FormControl sx={{ width: "300px" }}>
          <InputLabel id="demo-simple-select-label">Author</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userId}
            label="userId"
            onChange={handleChange}
          >
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>
          <Button
            disabled={!canSave}
            onClick={onSavePostClicked}
            sx={{ marginTop: "10px" }}
            variant="outlined"
          >
            Add Post
          </Button>
        </div>
      </div>
    </Box>
  );
}
