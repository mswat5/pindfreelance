import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Userform = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/user");
        }}
      >
        User
      </Button>
    </div>
  );
};

export default Userform;
