import BBQVideo from "./homePage";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Main content that expands to push the footer down */}
      <div>
        <BBQVideo />
      </div>

      {/* Footer stays at the bottom with no extra gap */}
      <Footer />
    </div>
  );
}
