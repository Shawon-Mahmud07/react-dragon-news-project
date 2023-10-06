import { Link } from "react-router-dom";
import NavBar from "../../Shared/Navbar/Navbar";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-10 flex justify-center ">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-24 place-items-center"
          >
            <Typography className="text-2xl" variant="h3" color="white">
              Login your account
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <small className="-mt-3">Forget Password?</small>

            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleClick} fullWidth>
              Login
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link className="ml-1 font-bold text-[#F8625C]" to="/register">
                {" "}
                Register
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
