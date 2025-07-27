import { BlogEntry, EntryTitle, EntryDate, EntryBody, Spacer } from '../UI';

export const meta = {
  id: 'age-of-llms',
  title: 'Age of LLMs',
  date: 'July 26, 2025',
};

const Post = () => (
  <BlogEntry id={meta.id}>
    <EntryTitle>{meta.title}</EntryTitle>
    <EntryDate>{meta.date}</EntryDate>
    <EntryBody>
      The year is 2015, the top summer blockbuster is a sci-fi film featuring a man-made AI, named
      Ultron, that tries to take over the world and kill all humans. Fast forward to 2025 and the AI
      is back with a vengeance, but this time it’s not a fictional character. It’s a reality that
      has transformed the way we live, work, and interact with technology. In particular, the rise
      of Large Language Models (LLMs) has ushered in a new era of artificial intelligence.
      <Spacer />
      To me, there are many pros and cons to the takeover of our robot overlords. The pros are
      largely focused on the rise in productivity in the areas, such as software development, where
      LLMs are being heavily utilized. In fact I'm having a hard time writing this blog post without
      peaking at what the LLMs are trying to guess I'm trying to write next. At times it's humbling
      to read that an LLM can write something so much more eloquently than I can. It's dizzying
      reading what it thinks I should write next, but to instead fight to express myself as I want.
      It's a little eerie, which brings me to the cons. Outside of the tremendous energy consumption
      of training and running LLMs, they are dulling our ability to think and perform for ourselves.
      The long term consequences of this can be catastrophic as the the value of human creativity
      and acquisition of mastery is on the decline. Why work hard and try when the LLMs can generate
      it for you? What will happen when the world is filled with AI slop that will be used to train
      the next generation of LLMs that will create any ever-so-sloppier slop? I can't even begin to
      guess, but my goal is to continue using LLMs as a tool to help better my life. I understand
      that I must be highly skeptical of anything that it generates for me and I must be especially
      skeptical of the generated content that I am not an expert in.
      <Spacer />
      As we continue to navigate this AI landscape, I encourage one to consider the implications on
      one's privacy. In the current world, corporations chase the big data dollar of collecting as
      much data as they can to build a user profile that can later be sold to advertisers or maybe
      monetized in another way. My journey towards privacy has lead me to{' '}
      <a href="https://huggingface.co/models" target="_blank" rel="noreferrer">
        https://huggingface.co/models
      </a>
      , where one may find all sorts of open source LLMs that can be run locally on one's own
      hardware. Some lessons to be learned:
      <ul>
        <li>
          The environment where you run your LLM matters. For me it was the ease-of-use and general
          UX that can make a process much more enjoyable. Initially I started running koboldcpp,
          then I tried a couple of others, but ultimately settled on LM Studio as the simplest
          platform for my hardware.
        </li>
        <li>
          LLMs will run the fastest on your GPU as opposed to your CPU and your video card brand
          matters. Right now, NVIDIA is the go-to for most LLM tasks and it has its own proprietary
          CUDA libraries for GPU acceleration. While CUDA is the leader - it is not the only option.
          AMD has been making strides in the AI space with its own, competing ROCm platform.
          Alternatively one may also run Vulkan or CPU-based runtimes, but they are just not as
          performant.
        </li>
        <li>
          The size of your GPU's VRAM matters a lot. This is because for LLM model to run the
          fastest, it must all be loaded into memory. For example, a 70B parameter model will
          require a lot more VRAM than a 7B parameter model. If you have a high-end GPU with 24GB of
          VRAM, you can run larger models like Llama 3 or GPT-4. If you have less VRAM, you may need
          to use smaller models or quantized versions. How I wish I could go back in time to buy a
          GPU with more VRAM.
        </li>
      </ul>
    </EntryBody>
  </BlogEntry>
);

export default Post;
