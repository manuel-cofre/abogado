
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="h-8 w-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-bold">Diego Cofré</h3>
                <p className="text-xs text-gray-400">Abogado</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Defendemos tus derechos con experiencia, dedicación y profesionalismo. 
              Tu confianza es nuestro mayor compromiso.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-amber-500 p-2 rounded-lg transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-500 p-2 rounded-lg transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-500 p-2 rounded-lg transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors duration-200">Derecho Civil</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors duration-200">Derecho Laboral</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors duration-200">Derecho Corporativo</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors duration-200">Derecho Inmobiliario</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors duration-200">Derecho Familiar</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors duration-200">Derecho Penal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#inicio" className="hover:text-amber-500 transition-colors duration-200">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-amber-500 transition-colors duration-200">Sobre mi</a></li>
              <li><a href="#servicios" className="hover:text-amber-500 transition-colors duration-200">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-amber-500 transition-colors duration-200">Contacto</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors duration-200">Casos de Éxito</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>+1234567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>hola@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p>Calle 666</p>
                  <p>El diablo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © Diego Cofré. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-500 transition-colors duration-200">Política de Privacidad</a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-200">Términos y Condiciones</a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-200">Aviso Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;