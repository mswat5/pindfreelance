import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Data from "./data";
const Employer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gray-300">
        <div>
          <h1 className="text-2xl font-bold">PindFreelance</h1>
        </div>
        <div>
          <Button
            onClick={() => {
              navigate("/register");
            }}
          >
            Logout
          </Button>
        </div>
      </nav>
      <main>
        {/* sidebar */}
        <div className="grid grid-cols-12 ">
          <div className="col-span-2 p-2">
            <Sidebar />
          </div>
          <div className="col-span-10 ">
            <Data />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Employer;
