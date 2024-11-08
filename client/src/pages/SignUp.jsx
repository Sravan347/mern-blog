import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    // Update formData with new value based on the field id
    const { id, value } = e.target;
    setFormData((prevFormData) => {
      const updatedData = { ...prevFormData, [id]: value.trim() };
      console.log(updatedData); // Log the updated form data
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all details");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/v1/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); // Await the JSON parsing

      if (!res.ok || data.success === false) {
        return setErrorMessage(data.message || "Something went wrong");
      }

      setLoading(false);
      navigate("/sign-in");
    } catch (err) {
      setErrorMessage("An error occurred. Please try again.");
      setLoading(false);
    }
    
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row  justify-center p-10 ">
      {/* Left side */}
      <div className="flex flex-col p-6 md:w-1/3 space-y-4">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            MERN's
          </span>
          blog
        </Link>

        <p className="text-base sm:text-lg mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          This is a Demo Project. You can Sign Up with your email and password
          or with Google.
        </p>
      </div>

      {/* Right side */}
      <div className="flex flex-col p-6 md:w-1/2 max-w-md space-y-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="userName" value="User Name" />
            <TextInput
              type="text"
              placeholder="User Name"
              id="userName"
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
          </div>

          <Button
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>

        <div className="text-center mt-4">
          <span className="mr-2">Have an account?</span>
          <Link to="/sign-in" className="text-indigo-600 hover:underline">
            Sign In
          </Link>
        </div>
        {errorMessage && (
          <Alert className="mt-5 " color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
}

export default SignUp;
