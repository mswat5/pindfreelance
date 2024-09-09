import marketplaceImg from "../../../assets/marketplace.jpg";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 px-8 ">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            About Our Decentralized Marketplace
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-white">
            Our platform connects freelancers with short-term jobs and gig work,
            utilizing blockchain for secure transactions and AI for personalized
            job matching.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={marketplaceImg}
              alt="Marketplace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-gray-700">
            <h2 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Our Mission
            </h2>
            <p className="mb-6 dark:text-white">
              To empower gig workers and stimulate local economies through a
              decentralized platform.
            </p>
            <h2 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Why Choose Us?
            </h2>
            <p className="dark:text-white">
              We offer innovative solutions for job matching, fair trade
              practices, and transparency through smart contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
