'use client';

import { useState } from 'react';
import { HiLightBulb } from 'react-icons/hi';
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandEmber,
  TbBrandAws,
  TbBrandDocker,
  TbBrandGit,
  TbBrandTailwind,
  TbBrandReactNative,
} from 'react-icons/tb';

import { Card } from '@/components/Card';
import { StyledLink } from '@/components/StyledLink';
import { ProjectCard } from '@/components/ProjectCard';
import { HighlightedWord } from '@/components/HighlightedWord';

export default function Home() {
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const skills = [
    { name: 'TypeScript', icon: TbBrandTypescript, color: 'text-blue-600' },
    { name: 'JavaScript', icon: TbBrandJavascript, color: 'text-yellow-500' },
    { name: 'React', icon: TbBrandReact, color: 'text-cyan-500' },
    { name: 'Next.js', icon: TbBrandNextjs, color: 'text-gray-900 dark:text-gray-100' },
    { name: 'Ember.js', icon: TbBrandEmber, color: 'text-orange-600' },
    { name: 'Tailwind', icon: TbBrandTailwind, color: 'text-cyan-400' },
    { name: 'React Native', icon: TbBrandReactNative, color: 'text-cyan-400' },
    { name: 'Node.js', icon: TbBrandNodejs, color: 'text-green-600' },
    { name: 'AWS', icon: TbBrandAws, color: 'text-orange-500' },
    { name: 'Docker', icon: TbBrandDocker, color: 'text-blue-600' },
    { name: 'Git', icon: TbBrandGit, color: 'text-red-500' },
    { name: 'AI', icon: HiLightBulb, color: 'text-purple-500' },
  ];

  const projects = [
    {
      id: 'huegasm',
      icon: '💡',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      title: 'Huegasm - Smart Lighting App',
      description: (
        <>
          Developed a multi-platform ecosystem (Chrome extension, web, Android, iOS) for controlling
          and syncing Philips Hue lights with music, featuring real-time audio analysis and
          customizable lighting effects. This commercial app generated thousands of dollars in
          revenue.{' '}
          <StyledLink href="https://www.youtube.com/watch?v=zi9J6Qg-MPw" external>
            Watch the trailer
          </StyledLink>{' '}
          or check out the{' '}
          <StyledLink href="https://github.com/nidratech/huegasm" external>
            open-sourced free version
          </StyledLink>
          .
        </>
      ),
      tags: [
        { label: 'IoT Integration', color: 'yellow' as const },
        { label: 'Audio Analysis', color: 'yellow' as const },
        { label: 'Cross-Platform', color: 'yellow' as const },
        { label: 'Real-time Sync', color: 'yellow' as const },
      ],
      screenshots: [
        {
          src: '/images/screenshots/huegasm-1.webp',
          alt: 'Huegasm app showing light control interface with power, brightness, and color settings',
        },
        {
          src: '/images/screenshots/huegasm-2.webp',
          alt: 'Huegasm app displaying music synchronization with playlist and audio controls',
        },
        {
          src: '/images/screenshots/huegasm-3.webp',
          alt: 'Huegasm app showing advanced customization options with color ranges and sensitivity settings',
        },
      ],
    },
    {
      id: 'tomati',
      icon: '🍽️',
      iconBgColor: 'bg-green-100 dark:bg-green-900/30',
      title: 'Tomati - Restaurant Data Platform',
      description: (
        <>
          Built a comprehensive restaurant health inspection aggregator for hundreds of thousands of
          Canadian and American establishments, integrating data from Groupon, Google, Yelp, and
          Zomato.
        </>
      ),
      tags: [
        { label: 'Data Aggregation', color: 'green' as const },
        { label: 'API Integration', color: 'green' as const },
        { label: 'Mobile App', color: 'green' as const },
        { label: 'Real-time Sync', color: 'green' as const },
      ],
      screenshots: [
        {
          src: '/images/screenshots/tomati-1.webp',
          alt: 'Tomati app showing restaurant map and search functionality',
        },
        {
          src: '/images/screenshots/tomati-2.webp',
          alt: 'Tomati app displaying health inspection reports and ratings',
        },
        {
          src: '/images/screenshots/tomati-3.webp',
          alt: 'Tomati app showing Groupon deals and restaurant offers',
        },
      ],
    },
    {
      id: 'next-deploy',
      icon: '⚡',
      iconBgColor: 'bg-purple-100 dark:bg-purple-900/30',
      title: 'Next Deploy Library',
      description: (
        <>
          Created an open-source{' '}
          <StyledLink href="https://github.com/lone-cloud/next-deploy" external>
            deployment orchestration library
          </StyledLink>{' '}
          for Next.js applications with AWS and GitHub Pages support, featuring serverless
          architecture and global CDN distribution.
        </>
      ),
      tags: [
        { label: 'DevOps', color: 'purple' as const },
        { label: 'AWS', color: 'purple' as const },
        { label: 'Serverless', color: 'purple' as const },
        { label: 'CLI Tool', color: 'purple' as const },
      ],
    },
    {
      id: 'cs16-addons',
      icon: '🚀',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900/30',
      title: 'CS 1.6 AMXX Addons',
      description: (
        <>
          Developed Counter-Strike 1.6 plugins achieving{' '}
          <StyledLink
            href="https://www.amxmodx.org/compiler.php?mod=1&cat=0&plugin=&author=hoboman&go=search"
            external
          >
            over 100k downloads
          </StyledLink>
          .
        </>
      ),
      tags: [
        { label: 'AMX Mod X', color: 'blue' as const },
        { label: 'Game Development', color: 'blue' as const },
        { label: 'Community Impact', color: 'blue' as const },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <div className="uppercase font-bold text-lg tracking-[2px] text-gray-500 dark:text-gray-400 mb-8 inline-block py-2 px-4 bg-gray-200/25 dark:bg-gray-700/25 rounded-lg">
          👋 Hello
        </div>

        <div className="text-xl leading-relaxed mb-6 text-gray-900 dark:text-gray-100 sm:leading-normal">
          Is it me you&apos;re looking for? My name is{' '}
          <HighlightedWord>Egor Philippov</HighlightedWord> and I&apos;m a experienced{' '}
          <HighlightedWord>Full Stack Software Engineer</HighlightedWord> with the ability to work
          on all parts of an application, be it on the server, browser or mobile. While well versed
          in a wide array of technologies, I’m currently the most comfortable with:{' '}
          <HighlightedWord>TypeScript</HighlightedWord>, <HighlightedWord>React</HighlightedWord>,{' '}
          <HighlightedWord>Node.js</HighlightedWord> and <HighlightedWord>Next.js</HighlightedWord>.
        </div>

        <div className="text-xl mb-4 text-gray-900 dark:text-gray-100">
          I am always looking for exciting new opportunities. Feel free to{' '}
          <StyledLink href="/contact">contact me</StyledLink> or check out my{' '}
          <StyledLink href="/resume">resume</StyledLink>.
        </div>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Key Accomplishments
        </h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              icon={project.icon}
              iconBgColor={project.iconBgColor}
              title={project.title}
              description={project.description}
              tags={project.tags}
              screenshots={project.screenshots}
              isExpanded={openAccordions[project.id]}
              onToggle={() => toggleAccordion(project.id)}
            />
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Technologies & Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-md group min-h-[100px]"
            >
              <Icon
                className={`text-3xl mb-2 ${color} group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight mt-auto">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
