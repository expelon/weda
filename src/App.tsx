import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage, AboutPage, ContactPage, GalleryPage } from './pages';
import { useEffect, useState } from 'react';

function AppContent() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const key = 'weda_join_popup_shown';
    const alreadyShown = sessionStorage.getItem(key);
    if (!alreadyShown) {
      const t = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem(key, '1');
      }, 5000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <Layout currentPath={location.pathname}>
      <>
        {showPopup && (
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowPopup(false)}
          >
            <div
              className="w-full max-w-md min-h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-rose-500 shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-6 sm:p-8 flex h-full">
                <button
                  aria-label="Close"
                  onClick={() => setShowPopup(false)}
                  className="absolute right-3 top-3 rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className="flex flex-col items-center text-center justify-between w-full gap-6">
                  <div className="h-6" aria-hidden="true"></div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                      Join Our Community of Strong Women
                    </h3>
                    <p className="mt-4 text-white/85">
                      Be part of the North Karnataka Women Association and connect, learn, and grow together.
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full pt-2">
                    <Link
                      to="/contact"
                      onClick={() => setShowPopup(false)}
                      className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-white/90 transition"
                    >
                      Become a Member Today
                    </Link>
                    <button
                      type="button"
                      onClick={() => setShowPopup(false)}
                      className="mt-3 text-sm text-white/80 hover:text-white"
                    >
                      No, Thanks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
