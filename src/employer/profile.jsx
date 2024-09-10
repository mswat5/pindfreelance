import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Profile = () => {
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
            <div className="profile-container">
              <h1>My Profile</h1>
              <div className="profile-header">
                <img
                  src="profile-pic-url"
                  alt="Profile"
                  className="profile-pic"
                />
                <div className="profile-info">
                  <h2>John Doe</h2>
                  <p>Web Developer</p>
                  <p>Location: New York, USA</p>
                </div>
              </div>
              <section className="skills-section">
                <h3>Skills</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>CSS</li>
                </ul>
              </section>
              <section className="bio-section">
                <h3>About Me</h3>
                <p>
                  I am a passionate web developer with experience in building
                  dynamic web applications. I love coding and am always eager to
                  learn new technologies.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
