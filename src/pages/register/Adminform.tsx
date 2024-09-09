import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Adminform = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/admin");
        }}
      >
        Admin
      </Button>
    </div>
  );
};

export default Adminform;
