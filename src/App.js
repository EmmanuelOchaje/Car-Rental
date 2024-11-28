import Navbar from "./components/reuseables/Navbar";
import Hero from "./components/Hero";
import HIW from "./components/HIW";
import WCU from "./components/WCU";
import Pop from "./components/Pop";
import Reviews from "./components/Reviews";
import Download from "./components/Download";
import Footer from "./components/Footer";
// import bg from "./assets/images/bg.png";
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.7,
    },
  },
};

function App() {
  return (
    <div className="App">
      <div className="bg lg:min-h-[100vh]">
        <Navbar />
        <Hero containerVariants={containerVariants} />
      </div>
      <HIW cardVariants={cardVariants} containerVariants={containerVariants} />
      <WCU containerVariants={containerVariants} cardVariants={cardVariants} />
      <Reviews />
      <Pop containerVariants={containerVariants} cardVariants={cardVariants} />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
