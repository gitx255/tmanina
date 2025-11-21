"use client"

import * as React from "react"
import { Header } from "@/components/header"
import { FloatingChat } from "@/components/floating-chat"
import { DhikrCounter } from "@/components/dhikr-counter"
import { IslamicCalendar } from "@/components/islamic-calendar"
import { Dashboard } from "@/components/dashboard"
import { PrayerTimes } from "@/components/prayer-times"
import { TasbihCircle } from "@/components/tasbih-circle"
import { About } from "@/components/about"
import { AdhkarList } from "@/components/adhkar-list"
import { SharePage } from "@/components/share-page"

export default function Home() {
  const [showSplash, setShowSplash] = React.useState(true)
  const [activeTab, setActiveTab] = React.useState("home")

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000) // 2 seconds as required
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return (
      <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark d-flex flex-column align-items-center justify-content-center z-3" style={{ zIndex: 9999 }}>
        <div className="text-center animate__animated animate__fadeIn">
          <div className="mb-4">
            <i className="fas fa-mosque text-white" style={{ fontSize: "4rem" }}></i>
          </div>
          <h1 className="display-1 fw-bold text-white mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>طمأنينة</h1>
          <p className="text-white-50 fs-4"> رفيقك في رحلة التقرب إلى الله
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-vh-100 d-flex flex-column bg-body-tertiary">
      <Header />

      <main className="flex-grow-1">
        <div className="container py-4">
          {/* Navigation Pills */}
          <style jsx>{`
            .main-tabs {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 9999;
              margin-bottom: 0 !important;
              border-radius: 0 !important;
              border-top: 1px solid var(--bs-border-color);
            }
            
            @media (min-width: 992px) {
              .main-tabs {
                position: sticky;
                top: 0;
                bottom: auto;
                border-top: none;
                border-radius: 1rem !important;
                margin-bottom: 1.5rem !important;
                z-index: 10;
              }
              
              .container {
                position: relative;
                z-index: 100;
              }
            }
            
            /* Dropdown opens upward on mobile */
            @media (max-width: 991px) {
              .main-tabs {
                overflow: visible !important;
              }
              
              :global(.dropdown-menu) {
                bottom: 100% !important;
                top: auto !important;
                transform: none !important;
                margin-bottom: 0.5rem;
                z-index: 10000 !important;
                position: absolute !important;
              }
            }
            
            /* Active state when dropdown is open */
            :global(.dropdown.show .nav-link) {
              background-color: var(--bs-primary);
              color: white !important;
            }
          `}</style>

          <ul className="nav nav-pills nav-fill bg-body shadow-sm p-2 gap-1 flex-nowrap main-tabs mb-4" id="mainTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link rounded-pill d-flex align-items-center justify-content-center gap-2 ${activeTab === "home" ? "active" : ""}`}
                onClick={() => setActiveTab("home")}
                type="button"
              >
                <i className="fas fa-home"></i>
                <span className="d-none d-sm-inline">الرئيسية</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link rounded-pill d-flex align-items-center justify-content-center gap-2 ${activeTab === "adhkar-list" ? "active" : ""}`}
                onClick={() => setActiveTab("adhkar-list")}
                type="button"
              >
                <i className="fas fa-book-open"></i>
                <span className="d-none d-sm-inline">الأذكار</span>
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className={`nav-link rounded-pill d-flex align-items-center justify-content-center gap-2 ${activeTab === "prayer-times" ? "active" : ""}`}
                onClick={() => setActiveTab("prayer-times")}
                type="button"
              >
                <i className="fas fa-clock"></i>
                <span className="d-none d-sm-inline">مواقيت الصلاة</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link rounded-pill d-flex align-items-center justify-content-center gap-2 ${activeTab === "calendar" ? "active" : ""}`}
                onClick={() => setActiveTab("calendar")}
                type="button"
              >
                <i className="fas fa-calendar-alt"></i>
                <span className="d-none d-sm-inline">التقويم</span>
              </button>
            </li>

            {/* Share Tab */}
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link rounded-pill d-flex align-items-center justify-content-center gap-2 ${activeTab === "share" ? "active" : ""}`}
                onClick={() => setActiveTab("share")}
                type="button"
              >
                <i className="fas fa-share-nodes"></i>
                <span className="d-none d-sm-inline">نشر</span>
              </button>
            </li>

            {/* Dropdown for other items */}
            <li className="nav-item dropdown" role="presentation">
              <a className="nav-link dropdown-toggle rounded-pill d-flex align-items-center justify-content-center gap-2" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                <i className="fas fa-bars"></i>
                <span className="d-none d-sm-inline">المزيد</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-4 p-2">
                <li>
                  <button
                    className={`dropdown-item rounded-3 d-flex align-items-center gap-2 py-2 mb-1 ${activeTab === "dashboard" ? "active" : ""}`}
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <i className="fas fa-chart-pie w-25 text-center"></i>
                    <span>الإحصائيات</span>
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item rounded-3 d-flex align-items-center gap-2 py-2 ${activeTab === "about" ? "active" : ""}`}
                    onClick={() => setActiveTab("about")}
                  >
                    <i className="fas fa-info-circle w-25 text-center"></i>
                    <span>عن التطبيق</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          <div className="tab-content">
            {activeTab === "home" && (
              <div className="animate__animated animate__fadeIn">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="card border-0 shadow-lg rounded-4 overflow-hidden home-hero-card">
                      <div className="home-hero-gradient p-4 p-md-5 text-white">
                        <h1 className="h3 h-md-2 mb-2 fw-bold">
                          مرحباً بك في تطبيق طمأنينة
                        </h1>
                        <p className="mb-0 mb-md-1">
                          تقرّب إلى الله بالأذكار والعبادات، في مكان واحد
                          .
                          <br></br>
                          مع مساعد طمأنينة الذكي للرد علي جميع اسئلتك الدينية.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="col-12">
                    <div className="row g-3 g-md-4">
                      {/* ورد الصباح */}
                      <div className="col-6 col-md-3">
                        <button
                          className="btn btn-lg w-100 h-100 p-4 rounded-4 border-0 shadow-sm bg-body-secondary position-relative overflow-hidden nav-card-btn"
                          onClick={() => {
                            setActiveTab("adhkar-list")
                            // Small delay to allow tab switch then click card
                            setTimeout(() => {
                              const morningCard = document.querySelector('.adhkar-card-morning') as HTMLElement
                              if (morningCard) {
                                morningCard.click()
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                              }
                            }, 100)
                          }}
                          type="button"
                        >
                          <div className="text-center">
                            <i className="fas fa-sun fs-1 gradient-text mb-3 d-block"></i>
                            <h5 className="fw-bold mb-0">ورد الصباح</h5>
                          </div>
                        </button>
                      </div>

                      {/* ورد المساء */}
                      <div className="col-6 col-md-3">
                        <button
                          className="btn btn-lg w-100 h-100 p-4 rounded-4 border-0 shadow-sm bg-body-secondary position-relative overflow-hidden nav-card-btn"
                          onClick={() => {
                            setActiveTab("adhkar-list")
                            setTimeout(() => {
                              const eveningCard = document.querySelector('.adhkar-card-evening') as HTMLElement
                              if (eveningCard) {
                                eveningCard.click()
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                              }
                            }, 100)
                          }}
                          type="button"
                        >
                          <div className="text-center">
                            <i className="fas fa-moon fs-1 gradient-text mb-3 d-block"></i>
                            <h5 className="fw-bold mb-0">ورد المساء</h5>
                          </div>
                        </button>
                      </div>

                      {/* تسبيح */}
                      <div className="col-6 col-md-3">
                        <button
                          className="btn btn-lg w-100 h-100 p-4 rounded-4 border-0 shadow-sm bg-body-secondary position-relative overflow-hidden nav-card-btn"
                          onClick={() => setActiveTab("tasbih")}
                          type="button"
                        >
                          <div className="text-center">
                            <span className="d-block mb-3" style={{ fontSize: '3rem' }}>📿</span>
                            <h5 className="fw-bold mb-0">تسبيح</h5>
                          </div>
                        </button>
                      </div>

                      {/* قريباً */}
                      <div className="col-6 col-md-3">
                        <button
                          className="btn btn-lg w-100 h-100 p-4 rounded-4 border-0 shadow-sm bg-body-secondary position-relative overflow-hidden nav-card-btn disabled"
                          type="button"
                          style={{ opacity: 0.7, cursor: 'default' }}
                        >
                          <div className="text-center">
                            <i className="fas fa-hourglass-half fs-1 text-secondary mb-3 d-block"></i>
                            <h5 className="fw-bold mb-0 text-secondary">قريباً</h5>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Tasbih Circle Preview */}
                  <div className="col-12">
                    <TasbihCircle />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "adhkar-list" && (
              <div className="animate__animated animate__fadeIn">
                <AdhkarList />
              </div>
            )}

            {activeTab === "tasbih" && (
              <div className="animate__animated animate__fadeIn">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <DhikrCounter />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "prayer-times" && (
              <div className="animate__animated animate__fadeIn">
                <PrayerTimes country="EG" city="Cairo" />
              </div>
            )}

            {activeTab === "calendar" && (
              <div className="animate__animated animate__fadeIn">
                <IslamicCalendar />
              </div>
            )}

            {activeTab === "share" && (
              <div className="animate__animated animate__fadeIn">
                <SharePage />
              </div>
            )}

            {activeTab === "dashboard" && (
              <div className="animate__animated animate__fadeIn">
                <Dashboard />
              </div>
            )}

            {activeTab === "about" && (
              <div className="animate__animated animate__fadeIn">
                <About />
              </div>
            )}
          </div>
        </div>
      </main>

      <FloatingChat />
    </div>
  )
}
