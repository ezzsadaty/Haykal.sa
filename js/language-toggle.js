const pages = {
  en: {
    index: "index-en.html",
    about: "about-en.html",
    services: "services-en.html",
    clients: "clients-en.html",
    success: "success-en.html",
    contact: "contact-en.html",
  },
  ar: {
    index: "index.html",
    about: "about.html",
    services: "services.html",
    clients: "clients.html",
    success: "success.html",
    contact: "contact.html",
  },
}
const switchLanguage = (lang) => {


  const currentPage = getCurrentPage()
  const targetUrl = pages[lang][currentPage]
  if (targetUrl) window.location.href = targetUrl
}

const getCurrentPage = () => {
  const filename = window.location.pathname.split("/").pop() || "index.html"
  if (filename.includes("index")) return "index"
  if (filename.includes("about")) return "about"
  if (filename.includes("services")) return "services"
  if (filename.includes("clients")) return "clients"
  if (filename.includes("success")) return "success"
  if (filename.includes("contact")) return "contact"
  return "index"
}

// Render AR/EN toggle and current lang highlighting
document.addEventListener("DOMContentLoaded", () => {
  const filename = window.location.pathname.split("/").pop() || "index.html"
  const isEnglish = filename.includes("-en")

  // Find or create container
  let toggleEl = document.querySelector(".language-toggle")
  if (!toggleEl) {
    const navbar = document.querySelector(".navbar")
    if (!navbar) return
    toggleEl = document.createElement("div")
    toggleEl.className = "language-toggle"
    const mobileMenu = navbar.querySelector(".mobile-menu")
    if (mobileMenu) {
      navbar.insertBefore(toggleEl, mobileMenu)
    } else {
      navbar.appendChild(toggleEl)
    }
  }

  const currentPage = getCurrentPage()
  const targetAr = pages.ar[currentPage]
  const targetEn = pages.en[currentPage]

  toggleEl.innerHTML = isEnglish
    ? `
      <a href="${targetAr}" class="lang-btn" title="عربي">AR</a>
      <span class="lang-separator">/</span>
      <span class="lang-current">EN</span>
    `
    : `
      <span class="lang-current">AR</span>
      <span class="lang-separator">/</span>
      <a href="${targetEn}" class="lang-btn" title="English">EN</a>
    `
})
