import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import profileJpeg from './foto-portfolio.jpeg';

function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden border-2 border-slate-700 hover:border-slate-500 transition-colors">
              <img
                src={profileJpeg}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Gonzalo Castaldi</h1>
            <p className="text-slate-400 text-lg">21 años, Estudiante Licenciatura en Sistemas</p>
            <p className="text-slate-300 leading-relaxed">
              Mi nombre es Gonzalo Castaldi, tengo 21 años y soy estudiante avanzado de la carrera de Lincenciatura en Sistemas en
              la Universidad ORT Uruguay. Actualmente estoy cursando mis últimos semestres de la carrera y estoy buscando
              una oportunidad para empezar mi carrera profesional como programador. Estoy interesado en el desarrollo de software y en
              la creación de aplicaciones web y móviles. Actualmente estoy trabajando en un proyecto personal de una aplicación
              web estilo Fantasy Football, donde los usuarios pueden crear sus propias ligas y equipos para competir entre ellos.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="https://gonzalocastaldi.com/yorugua"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 hover:border-slate-600"
          >
            <ExternalLink size={20} aria-hidden="true" />
            <span>Mi Proyecto</span>
          </a>

          <a
            href="https://digil.ink/s/167d6efb-95f5-421d-86a4-e24cc7f5be3d"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 hover:border-slate-600"
            aria-label="Descargar CV (se abre en una nueva pestaña)"
          >
            <FileText size={20} aria-hidden="true" />
            <span>Ver CV</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gonzalo-castaldi-11a3811aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 hover:border-slate-600"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452H16.89v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.341V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.603 0 4.269 2.37 4.269 5.455v6.286zM5.337 7.433c-1.097 0-1.985-.89-1.985-1.985 0-1.096.888-1.985 1.985-1.985s1.985.889 1.985 1.985c0 1.095-.888 1.985-1.985 1.985zM6.56 20.452H4.114V9h2.447v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;