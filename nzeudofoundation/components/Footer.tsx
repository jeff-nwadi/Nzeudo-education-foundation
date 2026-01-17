import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-950 text-gray-400 py-16 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
                <Link href="/" className="text-2xl font-bold text-white mb-6 block">
                    Nzeudo<span className="text-blue-500">Foundation</span>
                </Link>
                <p className="mb-6 leading-relaxed">
                    Empowering the next generation through education, innovation, and community support.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <Facebook size={18} />
                    </a>
                    <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <Twitter size={18} />
                    </a>
                    <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <Instagram size={18} />
                    </a>
                    <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                    <li><Link href="#about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
                    <li><Link href="#projects" className="hover:text-blue-500 transition-colors">Our Projects</Link></li>
                    <li><Link href="#donate" className="hover:text-blue-500 transition-colors">Donate</Link></li>
                    <li><Link href="#" className="hover:text-blue-500 transition-colors">Volunteer</Link></li>
                </ul>
            </div>

             {/* Contact */}
             <div>
                <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <MapPin className="text-blue-500 mt-1" size={18} />
                        <span>123 Education Lane, Lagos, Nigeria</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone className="text-blue-500" size={18} />
                        <span>+234 123 456 7890</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail className="text-blue-500" size={18} />
                        <span>contact@nzeudofoundation.org</span>
                    </li>
                </ul>
            </div>
            
            {/* Newsletter */}
            <div>
                <h4 className="text-white font-semibold mb-6">Newsletter</h4>
                <p className="mb-4 text-sm">Subscribe to get updates on our latest projects.</p>
                <form className="flex flex-col gap-3">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Nzeudo Education Foundation. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
