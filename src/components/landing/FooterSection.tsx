import { Cloud } from "lucide-react"

const FooterSection = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600 text-white shadow-md">
              <Cloud className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Cloud<span className="text-purple-400">Share</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>
            <a href="#pricing" className="transition-colors hover:text-white">
              Pricing
            </a>
            <a href="#testimonials" className="transition-colors hover:text-white">
              Testimonials
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </nav>

          {/* Social Icons */}
          {/* <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-md p-1.5 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="rounded-md p-1.5 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-1.5 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div> */}

        </div>

        {/* Bottom divider and copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {currentYear} CloudShare, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection