import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Employerform = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employerform</h1>
      <form action="/submit" method="post" className="space-y-4">
        {/* Name input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            autoComplete="name"
          />
        </div>
        {/* Email input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            autoComplete="email"
          />
        </div>
        {/* Password input */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="user_password"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            autoComplete="new-password"
            minLength={8}
          />
          <div className="text-sm text-gray-500">Minimum 8 characters.</div>
        </div>
        {/* Message textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="user_message"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>
        <Button
          type="submit"
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => navigate("/employer")}
        >
          Submit
        </Button>
        {/* Submit button */}
      </form>
    </div>
  );
};

export default Employerform;
