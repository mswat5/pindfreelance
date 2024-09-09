import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { User, ChevronRight, Building, UserRoundCheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import marketplaceImage from "../../assets/marketplace.jpg";

const Registerpage = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-gradient-to-r from-indigo-300 via-white to-pink-300">
        <div className="pt-4 pl-4">
          <ModeToggle />
        </div>
        <div className="h-screen flex justify-center flex-col">
          <div className="flex justify-center">
            <div>
              <p className="text-sm text-gray-500 my-4">Register As</p>

              <Button
                className="flex justify-between items-center w-full border border-gray-300 p-3 rounded-md mb-2"
                variant="secondary"
                onClick={() => navigate("/register/admin")}
              >
                <div className="flex items-center">
                  <User className="text-primary" />
                  <span className="ml-2 font-bold">Admin</span>
                </div>
                <ChevronRight />
              </Button>
              <Button
                className="flex justify-between items-center w-full border border-gray-300 p-3 rounded-md mb-2"
                variant="secondary"
                onClick={() => navigate("/register/user")}
              >
                <div className="flex items-center">
                  <UserRoundCheckIcon className="text-primary" />
                  <span className="ml-2 font-bold">User</span>
                </div>
                <ChevronRight />
              </Button>
              <Button
                className="flex justify-between items-center w-full border border-gray-300 p-3 rounded-md mb-2"
                variant="secondary"
                onClick={() => navigate("/register/employer")}
              >
                <div className="flex items-center">
                  <Building className="text-primary" />
                  <span className="ml-2 font-bold">Employer</span>
                </div>
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div
          className="bg-slate-200 dark:bg-slate-800 h-screen flex justify-center items-center flex-col"
          style={{
            backgroundImage: `url(${marketplaceImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-center ">
            <div className="max-w-lg">
              {/* <div className="text-3xl font-bold">"Freelancing Platform "</div>
              <div className="max-w-md text-xl font-semibold text-left mt-4">
                PindFreelance
              </div> */}
              {/* <div className="max-w-md text-sm font-light text-slate-400">
                    CEO | Acme corp
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
