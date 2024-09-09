import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Employerform = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/employer");
        }}
      >
        Employer
      </Button>
    </div>
  );
};

export default Employerform;
