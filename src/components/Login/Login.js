import React from 'react';
import { Router  } from 'react-router-dom';
import { Button } from 'antd';

function Login(props) {

  const login = () => {
    props.history.push("/dashboard/*")
  }

  return (
    <div style={{ padding: 20 }}>
      <Button onClick={login} type="primary">Login</Button>
    </div>
  );
}

export default Login;