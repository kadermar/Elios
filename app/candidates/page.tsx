import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function CandidatesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              For Candidates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advance your career with Elios. We connect top talent with leading companies
              across industries to create meaningful career opportunities.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Elios?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Personalized Career Guidance</h3>
                      <p className="text-gray-600">Expert recruiters provide tailored advice to accelerate your career growth.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Exclusive Opportunities</h3>
                      <p className="text-gray-600">Access to hidden job market and exclusive positions at top companies.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Industry Expertise</h3>
                      <p className="text-gray-600">Deep knowledge across technology, healthcare, finance, and more.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Long-term Partnership</h3>
                      <p className="text-gray-600">Ongoing support throughout your career journey, not just job placement.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Take the first step towards your next career opportunity. Upload your resume
                  or schedule a consultation with one of our expert recruiters.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                    Upload Resume
                  </button>
                  <Link 
                    href="/book-demo" 
                    className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors block text-center"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Career Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-semibold mb-2">Resume Tips</h3>
                <p className="text-gray-600 text-sm">Professional guidance on crafting compelling resumes that stand out.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-semibold mb-2">Interview Prep</h3>
                <p className="text-gray-600 text-sm">Expert coaching to help you ace your next interview with confidence.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold mb-2">Career Planning</h3>
                <p className="text-gray-600 text-sm">Strategic advice for long-term career growth and advancement.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}