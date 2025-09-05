import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function StaffingServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Staffing Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive talent solutions designed to meet your organization's unique needs
              and drive sustainable growth.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Direct Hire</h3>
                <p className="text-gray-600 mb-4">
                  Permanent placement services for executive, professional, and technical roles 
                  across all industries.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Executive search</li>
                  <li>• Professional placement</li>
                  <li>• Technical recruiting</li>
                  <li>• Specialized roles</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contract Staffing</h3>
                <p className="text-gray-600 mb-4">
                  Flexible staffing solutions for project-based work, seasonal needs, 
                  and specialized expertise.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Project-based roles</li>
                  <li>• Interim leadership</li>
                  <li>• Seasonal staffing</li>
                  <li>• Specialized consulting</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contract-to-Hire</h3>
                <p className="text-gray-600 mb-4">
                  Evaluate candidates through contract work before making permanent 
                  hiring decisions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Risk mitigation</li>
                  <li>• Cultural fit assessment</li>
                  <li>• Skills validation</li>
                  <li>• Flexible conversion</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Talent Advisory</h3>
                <p className="text-gray-600 mb-4">
                  Strategic consulting to optimize your talent acquisition and 
                  retention strategies.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Talent strategy</li>
                  <li>• Market analysis</li>
                  <li>• Compensation benchmarking</li>
                  <li>• Process optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}