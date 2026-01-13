import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <div className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-2 xs:py-3 sm:py-4">
        <div className="flex items-center space-x-1 xs:space-x-2 text-xs xs:text-sm text-gray-500">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="w-2.5 h-2.5 xs:w-3 xs:h-3" />}
              {item.link ? (
                <a href={item.link} className="hover:text-gray-700">
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
