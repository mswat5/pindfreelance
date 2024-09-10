import { useState } from "react";
import marketplace from "../assets/marketplace.jpg";

const data = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const freelancers = [
    {
      name: "Harneev Kaur",
      project: "Build a Personal Portfolio",
    },
    {
      name: "Kulvinder Singh",
      project: "Create an E-commerce Website",
    },
    {
      name: "Pulvinder Singh",
      project: "Social Media Management",
      isUnknown: true,
    },
    {
      name: "Gurleen Kaur",
      project: "Build a Personal Portfolio",
    },
    {
      name: "Amar Singh",
      project: "Create an E-commerce Website",
    },
    {
      name: "Jasleen",
      project: "Social Media Management",
    },
    {
      name: "Chirag",
      project: "Build a Personal Portfolio",
    },
    {
      name: "Jyoti",
      project: "Create an E-commerce Website",
    },
    {
      name: "Simranpreet",
      project: "Social Media Management",
    },
    {
      name: "Achint",
      project: "Social Media Management",
    },
    {
      name: "Agamjot",
      project: "Social Media Management",
      imgSrc: "../assets/marketplace.jpg", // Updated to use the specified image
    },
    {
      name: "Aneeldeep",
      project: "Social Media Management",
      imgSrc: "../assets/marketplace.jpg", // Updated to use the specified image
    },
    {
      name: "Aagya",
      project: "Social Media Management",
      imgSrc: "../assets/marketplace.jpg", // Updated to use the specified image
    },
    {
      name: "Avneet",
      project: "Social Media Management",
      imgSrc: "../assets/marketplace.jpg", // Updated to use the specified image
    },
    {
      name: "Adya",
      project: "Social Media Management",
      imgSrc: "../assets/marketplace.jpg", // Updated to use the specified image
    },
    {
      name: "Asis",
      project: "Social Media Management",
      imgSrc: "../assets/marketplace.jpg", // Updated to use the specified image
      isUnknown: true,
    },
  ];

  const searchFreelancers = () => {
    return freelancers.filter(
      (freelancer) =>
        freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        freelancer.project.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <main className="container mx-auto py-8 flex-1">
          <h1 className="text-center text-4xl mb-6">
            Explore Freelancer Projects
          </h1>

          <nav className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-md mb-6">
            <h2 className="text-lg">Available Freelancers</h2>
            <form className="flex">
              <input
                type="text"
                placeholder="Search for Freelancer"
                className="form-input mr-2 px-2 py-1 rounded-md text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600"
                onClick={searchFreelancers}
              >
                Search
              </button>
            </form>
          </nav>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchFreelancers().map((freelancer, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md text-center shadow-md"
              >
                <img
                  src={marketplace}
                  alt={freelancer.name}
                  className={`mx-auto mb-4 rounded  ${
                    freelancer.isUnknown ? "rounded-full" : ""
                  }  h-36 w-36`}
                />
                <h3 className="text-lg font-bold">{freelancer.name}</h3>
                <p className="mb-4">Project: {freelancer.project}</p>
                <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">
                  Assign (Login Required)
                </button>
              </div>
            ))}
          </div>
        </main>

        <footer className="bg-gray-900 text-white text-center p-4">
          <p>&copy; 2024 Freelancer Platform</p>
        </footer>
      </div>
    </div>
  );
};

export default data;
