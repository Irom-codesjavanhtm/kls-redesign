// app/layout.js
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css"; // Import global styles if any

export const metadata = {
  title: "Kone Lone Shin",
  description: "KLS Company: Reimagined",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white scroll-smooth md:scroll-auto">
        {/* Header and Navbar */}
        <Header />
        <Navbar />
        {/* Main content, the children will be dynamically rendered here */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
