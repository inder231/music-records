import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, Input, FormLabel, Button, Box } from "@chakra-ui/react";
import { loginUser } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.authReducer.isLoading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const payload = { email, password };
    dispatch(loginUser(payload)).then((r) => {
      if (r.type === "LOGIN_SUCCESS") {
        navigate("/");
      }
    });
  };
  return (
    <Box w="50%" m="10% auto" >
      <form onSubmit={handleLogin}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormControl>
        <Box textAlign='center'>
          <Button m="2" type="submit" isLoading={isLoading} colorScheme="whatsapp">
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
