import React from 'react';
import { Scale, Building, Users, FileText, Home, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Derecho Civil",
      description: "Contratos, responsabilidad civil, daños y perjuicios. Resolución de conflictos entre particulares.",
      features: ["Contratos civiles", "Responsabilidad civil", "Sucesiones y herencias"]
    },
    {
      icon: Briefcase,
      title: "Derecho Laboral",
      description: "Defensa de derechos laborales, despidos injustificados, negociación colectiva.",
      features: ["Despidos improcedentes", "Acoso laboral", "Negociación colectiva"]
    },
    {
      icon: Building,
      title: "Derecho Corporativo",
      description: "Constitución de empresas, fusiones, adquisiciones y asesoría empresarial integral.",
      features: ["Constitución de sociedades", "Fusiones y adquisiciones", "Compliance corporativo"]
    },
    {
      icon: Home,
      title: "Derecho Inmobiliario",
      description: "Compraventa, arrendamientos, propiedad horizontal y regularización de inmuebles.",
      features: ["Compraventa inmobiliaria", "Contratos de arrendamiento", "Propiedad horizontal"]
    },
    {
      icon: Users,
      title: "Derecho Familiar",
      description: "Divorcios, custodia, pensiones alimenticias y adopciones con enfoque humano.",
      features: ["Divorcios consensuales", "Custodia de menores", "Pensiones alimenticias"]
    },
    {
      icon: FileText,
      title: "Derecho Penal",
      description: "Defensa penal, delitos económicos, recursos y procedimientos penales.",
      features: ["Defensa penal", "Delitos económicos", "Recursos de apelación"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios jurídicos especializados en diversas áreas del derecho, 
            adaptados a las necesidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                  Consultar
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
          <p className="text-xl text-gray-300 mb-6">
            Contamos con un equipo multidisciplinario para abordar casos especiales y únicos.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
            Contacta con nosotros
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;