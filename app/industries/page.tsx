import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elios partners with companies across key industries to deliver specialized talent solutions
              that drive growth and innovation.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Technology</h3>
                <p className="text-gray-600">Software development, AI/ML, cybersecurity, and tech leadership roles.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
                <p className="text-gray-600">Clinical roles, healthcare administration, and medical technology positions.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Finance</h3>
                <p className="text-gray-600">Financial services, banking, investment management, and fintech roles.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
                <p className="text-gray-600">Operations, supply chain, quality assurance, and engineering positions.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Professional Services</h3>
                <p className="text-gray-600">Consulting, legal, accounting, and business services roles.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Energy</h3>
                <p className="text-gray-600">Oil & gas, renewable energy, and energy technology positions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}