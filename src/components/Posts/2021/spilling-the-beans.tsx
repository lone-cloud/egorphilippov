import { Entry, EntryTitle, EntryDate, EntryBody, Spacer, SubTitle, Italic } from '../UI';

export const meta = {
  id: 'spilling-the-beans',
  title: 'Spilling the beans',
  date: 'Mar. 12, 2021',
};

const Post = () => (
  <Entry id={meta.id}>
    <EntryTitle>{meta.title}</EntryTitle>
    <EntryDate>{meta.date}</EntryDate>
    <EntryBody>
      It&apos;s now 2021, which means that I have been a professional software engineer for over 10
      years. Having also spent thousands of hours outside of work reading, practicing, and and
      tinkering, I now consider myself a master of the craft. As such, I consider it my duty to try
      to put into words what I have learned so far in my tech career. It&apos;s time to spill the
      beans. I will attempt to describe exactly what I think it takes to create a masterful
      technical implementation.
      <Spacer />
      <ol>
        <li>
          <SubTitle>Tooling</SubTitle>I think it&apos;s safe to say that software has become
          immensely complicated. For any given technology, there is a wide array of best practices,
          standards and idiomatic ways of doing things. Once you learn one, another pattern comes
          along and you might have to reevaluate the way you were doing things previously. To help
          us mortals stay on course it is highly advisable to rely on tools to nudge us in the right
          direction. The web community is great for tooling and below is my current, go-to toolkit:
          <ul>
            <li>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                vscode
              </a>{' '}
              - hands down the best (and free) code editor.
            </li>

            <li>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                Git
              </a>
              /
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              /
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                Git Bash
              </a>{' '}
              - Git is currently the most popular version control system, GitHub is the best place
              to host your git-controlled projects and Git Bash is my favorite command line terminal
              for windows (comes with git).
            </li>

            <li>
              <a href="https://www.syntevo.com/smartgit/" target="_blank" rel="noreferrer">
                smartgit
              </a>{' '}
              - a UI client for git as to me, it&apos;s much easiest to work with it through a UI
              rather than the command line.
            </li>

            <li>
              <a
                href="https://developers.google.com/web/tools/lighthouse"
                target="_blank"
                rel="noreferrer"
              >
                Lighthouse
              </a>{' '}
              - a great website auditing tool and it&apos;s already built into the Chrome browser.
            </li>

            <li>
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                TypeScript
              </a>{' '}
              - I don&apos;t write any JavaScript code nowadays and have switched completely to
              TypeScript, which I believe helps me write better code and provides a better
              development experience. I also highly recommend using TypeScript in strict mode.
            </li>

            <li>
              <a href="https://prettier.io/" target="_blank" rel="noreferrer">
                Prettier
              </a>{' '}
              - a fantastic code formatter.
            </li>

            <li>
              <a href="https://eslint.org/" target="_blank" rel="noreferrer">
                ESLint
              </a>
              /
              <a href="https://stylelint.io/" target="_blank" rel="noreferrer">
                Stylelint
              </a>{' '}
              - static code analysis is fantastic for enforcing code standards. ESLint can analyse
              your code while Stylelint will analyse your CSS.
            </li>

            <li>
              <a
                href="https://github.com/raineorshine/npm-check-updates"
                target="_blank"
                rel="noreferrer"
              >
                npm-check-updates
              </a>{' '}
              - I&apos;m obsessed with staying on the latest release for my app&apos;s dependencies
              and this tells me if I&apos;m not.
            </li>
          </ul>
        </li>

        <Spacer />
        <li>
          <SubTitle>Community</SubTitle>For my work, I largely rely on the work of other developers
          as the building blocks for my applications. Even this seemingly simple{' '}
          <a
            href="https://github.com/lone-cloud/egorphilippov/blob/master/package.json#L16"
            target="_blank"
            rel="noreferrer"
          >
            site has a dozen dependencies and a couple dozen dev dependencies
          </a>
          . This way I save myself an enormous amount of work trying to recreate the wheel.
          <Spacer />
          My process for selecting technologies to work with is embarrassingly simple and it really
          comes down to 3 simple questions:
          <ul>
            <li>How many stars does it have on GitHub?</li>
            <li>How many weekly (usually npm) downloads does it have?</li>
            <li>
              Does it have any obvious disqualifying factors in its repository like an ancient
              &quot;last commit&quot; date or a depreciation notice in its README.md?
            </li>
          </ul>
          For the truly big decisions I also try to understand the public sentiment towards the
          technology and read about other developer&apos;s experiences. At this point I will turn to
          some good old Googling. Hacker News and Reddit searches are usually worthwhile and they
          can be easily searched from Google by appending <Italic>site:reddit.com</Italic> to your
          search query for Reddit-only results. Websites like{' '}
          <a href="https://stateofjs.com/" target="_blank" rel="noreferrer">
            stateofjs.com
          </a>{' '}
          also offer great insightful into technical trends.
        </li>

        <Spacer />
        <li>
          <SubTitle>Productivity</SubTitle>The formula to define one&apos;s productivity is:{' '}
          <Italic>productivity = focus intensity x focus time</Italic> The steps one must take to
          maximize their productivity depend on the individual. For me it helps to be in a
          comfortable position that I can spend hours in, ideally free from distractions. Soundproof
          headphones and repetitive music work also wonders for me.
          <Spacer />
          Beside any technical recommendations, it&apos;s imperative to always take good care of
          oneself. This is where good sleep and exercise come into play. Taking care of these will
          help maintain a focused mind. Lastly, I&apos;ve found it hard for myself to stay highly
          focused that I&apos;m uninterested in. If possible, try to make your work interesting - be
          it through finding it yourself or asking for it from your lead.
        </li>

        <Spacer />
        <li>
          <SubTitle>Development</SubTitle>When it comes down to getting down and dirty with the
          implementation details I like to keep things as simple as I can. Front-to-back-to-mobile
          should all preferably be implemented with a single technology. My preference at this time
          is{' '}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            Next.js
          </a>{' '}
          for frontend and backend development with{' '}
          <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
            react-native
          </a>{' '}
          for mobile. This presents a highly efficient combination allowing one to re-use some code
          between different code bases (since they&apos;re both built with React), especially if
          using a common UI library like{' '}
          <a href="https://github.com/necolas/react-native-web" target="_blank" rel="noreferrer">
            react-native-web
          </a>
          .
        </li>

        <Spacer />
        <li>
          <SubTitle>Deployment</SubTitle>As with development, it&apos;s good to keep it simple.
          Docker, micro-services, kubernetes, etc... are all best left to enterprise development.
          I&apos;ve had great success with serverless deployments.
          <Spacer />
          After{' '}
          <a href="https://github.com/lone-cloud/next-deploy" target="_blank" rel="noreferrer">
            attempting to create my own deployment library
          </a>{' '}
          for AWS, I think it&apos;s much more straight-forward to use a more established platform
          like{' '}
          <a href="https://vercel.com/" target="_blank" rel="noreferrer">
            Vercel
          </a>
          . Much of the vital web things are already baked in like analytics, CDN hosting and
          automatic deployment from commits. There is zero configuration required if you&apos;re
          already developing with their framework, Next.js.
        </li>

        <Spacer />
        <li>
          <SubTitle>Maintenance</SubTitle>When thinking about maintenance of your software you
          should first consider if it&apos;s even worth maintaining. Have you found a product market
          fit already and have some degree of confidence that your product will be around for years
          to come? If not, you would very likely be wasting time writing tests and worrying about
          long-term maintenance. Time that could be better spent on improving the product.
        </li>
      </ol>
    </EntryBody>
  </Entry>
);

export default Post;
