import "./styles.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [myData, setMyData] = useState("");

  useEffect(() => {
    const customerid = localStorage.getItem("customerid");

    console.log(customerid);
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    // Validate email
    if (email === "") {
      setEmailError("Please enter your email");
      return;
    } else {
      setEmailError("");
    }

    // Validate password
    if (password === "") {
      setPasswordError("Please enter your password");
      return;
    } else {
      setPasswordError("");
    }

    console.log(email);
    console.log(password);

    let result = await fetch("http://localhost:8070/customer/customerlogin", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);

    if (result.auth) {
      navigate("/");

      localStorage.setItem("customerid", JSON.stringify(result.customer._id));
      localStorage.setItem("customeremail", JSON.stringify(result.customer.email));
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <form>
          <h1>Login</h1>
          <p>
            Already have an account? Login in or{" "}
            <Link to={"/customer/addCustomer"}>
              <a href="#">Sign Up</a>
            </Link>
          </p>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          {emailError && <div className="text-danger">{emailError}</div>}

          <label htmlFor="psw">Password</label>
          <input
          
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <div className="text-danger">{passwordError}</div>}

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <div className="buttons">
            <button
              type="button"
              className="btn btn-dark"
              style={{ backgroundColor: "#FF0000", color: "white" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleLogin}
              className="btn btn-dark"
              style={{ backgroundColor: "#04A80A", color: "white" }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
