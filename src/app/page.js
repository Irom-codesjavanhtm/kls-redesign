// app/page.js
import Carousel from "./components/Content";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Carousel />
      <About />
    </div>
  );
}
