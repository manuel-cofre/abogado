
import { CheckCircle, Target, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Sobre mi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Abogado comprometido con la excelencia jurídica 
            y la defensa inquebrantable de los derechos de los clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Experiencia que Marca la Diferencia
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              he construido una reputación sólida basada en 
              resultados excepcionales y un servicio personalizado. Nuestro equipo combina 
              experiencia tradicional con enfoques innovadores para resolver los casos 
              más complejos.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Asesoría legal integral y personalizada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Estrategias jurídicas innovadoras</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Comunicación transparente y constante</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Compromiso con la excelencia</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipo legal profesional"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">98%</div>
              <p className="text-sm">Casos Ganados</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
            <Target className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Precisión</h4>
            <p className="text-gray-600 text-sm">Análisis detallado de cada caso para estrategias efectivas</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
            <Heart className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Compromiso</h4>
            <p className="text-gray-600 text-sm">Dedicación total a la defensa de tus intereses</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
            <Shield className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Protección</h4>
            <p className="text-gray-600 text-sm">Salvaguardamos tus derechos con firmeza y profesionalismo</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
            <CheckCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Resultados</h4>
            <p className="text-gray-600 text-sm">Historial probado de éxito en casos complejos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;