import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form handling logic here
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
            Sravan's
          </span>
          blog
        </Link>

        <p className="text-base sm:text-lg mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          This is a Demo Project. You can Sign Up with your email and password or with Google.
        </p>
      </div>

      {/* Right side */}
      <div className="flex flex-col p-6 md:w-1/2 max-w-md space-y-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="userName" value="User Name" />
            <TextInput type="text" placeholder="User Name" id="userName" />
          </div>

          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput type="email" placeholder="Email" id="email" />
          </div>

          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput type="password" placeholder="Password" id="password" />
          </div>

          <Button gradientDuoTone="purpleToPink" type="submit">
            Sign Up
          </Button>
        </form>

        <div className="text-center mt-4">
          <span className="mr-2">Have an account?</span>
          <Link to="/sign-in" className="text-indigo-600 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
