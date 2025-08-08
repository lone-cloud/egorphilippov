import { ReactNode } from 'react';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';

import { Tag } from '@/components/Tag';

interface ProjectCardProps {
  icon: string;
  iconBgColor: string;
  title: string;
  description: ReactNode;
  tags: Array<{ label: string; color: 'yellow' | 'green' | 'purple' | 'blue' }>;
  screenshots?: Array<{
    src: string;
    alt: string;
  }>;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ProjectCard = ({
  icon,
  iconBgColor,
  title,
  description,
  tags,
  screenshots,
  isExpanded,
  onToggle,
}: ProjectCardProps) => (
  <div className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
    <div className="flex items-start space-x-4 p-6">
      <div
        className={`flex-shrink-0 w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          {screenshots && (
            <button
              onClick={onToggle}
              className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <span className="text-sm font-medium">Screenshots</span>
              {isExpanded ? (
                <HiChevronDown className="w-4 h-4" />
              ) : (
                <HiChevronRight className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
        <div className="text-gray-600 dark:text-gray-400 mb-3">{description}</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Tag key={index} color={tag.color}>
              {tag.label}
            </Tag>
          ))}
        </div>
        {screenshots && isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="grid md:grid-cols-3 gap-4">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 aspect-[9/16] transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);
