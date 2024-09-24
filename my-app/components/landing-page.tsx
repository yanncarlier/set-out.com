'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src="/logo.jpeg"
            alt="SET-OUT Logo"
            width={200}
            height={200}
            className="h-auto w-auto"
          />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="bg-black text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">SET-OUT INTERNATIONAL COMPANY LIMITED</h1>
            <p className="text-xl mb-8">Empowering individuals and organizations through expert technical services, training and development</p>
            {/* <Button variant="secondary" size="lg">Learn More</Button> */}
          </div>
        </section>
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
             <div className="grid md:grid-cols-2 gap-8">
              <div>
              <h3 className="text-xl font-semibold mb-4">Technology Services</h3>
                <p className="text-gray-600">Our team of experienced professionals is dedicated to delivering high-quality, innovative training that drives real results and lasting change.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">To inspire growth, foster excellence, and facilitate positive transformation in individuals and organizations through cutting-edge technical services, training and development services.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Leadership Development</h3>
                <p className="text-gray-600">Empower your leaders with the skills and knowledge they need to drive success and inspire their teams.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Team Building</h3>
                <p className="text-gray-600">Foster collaboration, communication, and cohesion within your teams to boost productivity and engagement.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Skills Training</h3>
                <p className="text-gray-600">Enhance your workforce's capabilities with targeted training in essential professional skills.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Technical services</h3>
                <p className="text-gray-600">Provide cutting-edge technical Infrastructure, development and support to keep your team at the forefront of technological advancements.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-xl mb-8">Ready to take your organization to the next level? Get in touch with us today!</p>
            <Button size="lg">Contact at set-out dot com </Button>
            <section id="about" className="py-16">
<p className="text-gray-600">
SET-OUT INTERNATIONAL COMPANY LIMITED
Avenida Comercial de Macau, No. 5 EDF, FIT Centre, 5 Andar, Macau
Registration: 44438(SO)
启程国际有限公司
澳门商业大马路5地段澳门财富中心五楼
Phone: +853 82 9467 00
Fax: +853 82 9467 01
Hours:
Monday - Friday: 9:00AM - 5:00PM
Company object:
1 - Import export and commerce of logical products and equipment (hardware and software);
2 - Consultancy and service analysis in electrical engineering, information technology and communication;
3 - Subcontracting in information technology;
4 - Project management;
5 - Training, formation;
6 - Digital Marketing;
7 - Software Development;
8 - Technical assistance;</p>
            </section>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 SET-OUT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}