import HomePage from "./ui/homePage";
import Footer from "./ui/footer";
import LeftSide from "./ui/leftSide";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Main content that expands to push the footer down */}
      <div>
        <HomePage />
      </div>
      <div>
        <LeftSide />
      </div>

      {/* Footer stays at the bottom with no extra gap */}
      <Footer />
    </div>
  );
}
