import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Defendemos
              <span className="text-amber-500 block">Tus Derechos</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Con más de 15 años de experiencia, ofrecemos asesoría legal especializada 
              y representación de calidad para proteger tus intereses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                Consulta Gratuita
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Ver Servicios
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700">
              <div className="text-center">
                <Award className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">15+</div>
                <p className="text-sm text-gray-400">Años de Experiencia</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <p className="text-sm text-gray-400">Casos Exitosos</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <p className="text-sm text-gray-400">Disponibilidad</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
              <div className="bg-white rounded-xl p-6 transform -rotate-3">
                <img
                  src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Abogado profesional"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 text-slate-900">
                  <h3 className="font-bold text-lg">Dr. Carlos Martínez</h3>
                  <p className="text-sm text-gray-600">Socio Fundador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;