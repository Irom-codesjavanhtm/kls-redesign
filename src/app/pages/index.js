import Carousel from "../components/Content";

export default function Home() {
  return (
    <div>
      <Carousel />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      isLandingPage: true, // Let the layout know it's the landing page
    },
  };
}
