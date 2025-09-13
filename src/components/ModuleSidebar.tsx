import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  title: string;
  modules: Array<{
    id: string;
    title: string;
    url: string;
    icon: React.ComponentType<any>;
    category?: string;
    available?: boolean;
    comingSoon?: boolean;
  }>;
  currentModule?: string;
  baseUrl: string;
  backUrl: string;
  backLabel: string;
}

export default function ModuleSidebar({ 
  title, 
  modules, 
  currentModule, 
  baseUrl, 
  backUrl, 
  backLabel 
}: SidebarProps) {
  return (
    <div className="w-80 bg-white shadow-xl rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-scaleit-red to-scaleit-purple p-6 text-white">
        <Link
          href={backUrl}
          className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          {backLabel}
        </Link>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-white/80 text-sm mt-1">
          {modules.filter(m => m.available !== false).length} Module verfügbar
        </p>
      </div>

      {/* Navigation */}
      <div className="p-4 max-h-[calc(100vh-200px)] overflow-y-auto">
        <div className="space-y-2">
          {modules.map((module, index) => {
            const isActive = currentModule === module.url;
            
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={`${baseUrl}/${module.url}`}
                  className={`block p-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white shadow-lg'
                      : module.comingSoon
                      ? 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-200'
                      : 'text-scaleit-gray hover:bg-gray-50 hover:text-scaleit-red'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    {module.icon ? (
                      <module.icon className={`w-5 h-5 mr-3 ${
                        isActive ? 'text-white' : module.comingSoon ? 'text-yellow-600' : 'text-scaleit-gray group-hover:text-scaleit-red'
                      }`} />
                    ) : (
                      <div className={`w-5 h-5 mr-3 rounded ${
                        isActive ? 'bg-white' : module.comingSoon ? 'bg-yellow-600' : 'bg-scaleit-gray group-hover:bg-scaleit-red'
                      }`} />
                    )}
                    <div>
                        <div className={`font-medium text-sm ${
                          isActive ? 'text-white' : module.comingSoon ? 'text-yellow-800' : 'text-scaleit-black'
                        }`}>
                          {module.title}
                        </div>
                        {module.category && (
                          <div className={`text-xs ${
                            isActive ? 'text-white/80' : module.comingSoon ? 'text-yellow-600' : 'text-scaleit-gray'
                          }`}>
                            {module.category}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center">
                      {module.comingSoon && (
                        <span className="bg-yellow-400 text-yellow-800 text-xs px-2 py-1 rounded-full font-bold mr-2">
                          Soon
                        </span>
                      )}
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                        isActive ? 'text-white rotate-90' : 'text-scaleit-gray group-hover:translate-x-1'
                      }`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-scaleit-red to-scaleit-purple text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-scaleit-purple hover:to-scaleit-red transition-all duration-300"
          >
            Support kontaktieren
          </Link>
        </div>
      </div>
    </div>
  );
}