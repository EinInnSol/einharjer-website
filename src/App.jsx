import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Einharjer Innovative Solutions</h1>
        <p className="text-lg text-gray-600">Empowering communities through digital outreach, equity advocacy, and innovation</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Consulting Services</h2>
            <p className="mb-4">We offer tailored outreach and advocacy consulting for nonprofits, attorneys, and public agencies. Our work is grounded in lived experience and innovative strategy.</p>
            <Button>Schedule a Consultation</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Digital Outreach Toolkit</h2>
            <p className="mb-4">Download templates, guides, and tech tools to increase your impact. Includes tenant rights resources, expungement help, and custom outreach materials.</p>
            <Button>View Products</Button>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">AI Virtual Advocate</h3>
            <p>Our chatbot helps people navigate housing, legal, and reentry systems with ease.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">Micro-Courses</h3>
            <p>Learn your rights, how to apply for aid, or build a new life post-incarceration through bite-sized training.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">Community Impact Programs</h3>
            <p>Support or partner with our reentry employment projects and outreach campaigns.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-gray-500 text-sm">
        <p>&copy; 2025 Einharjer Innovative Solutions LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}
