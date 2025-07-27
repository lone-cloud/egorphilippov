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
      The year is 2015, and the top summer blockbuster is a sci-fi film featuring a man-made AI
      named Ultron that tries to take over the world and kill all humans. Fast forward to 2025, and
      AI is back with a vengeance, but this time it’s not a fictional character. It’s a reality that
      has transformed the way we live, work, and interact with technology. In particular, the rise
      of Large Language Models (LLMs) has ushered in a new era of artificial intelligence.
      <Spacer />
      To me, there are many pros and cons to the takeover of our robot overlords. The pros are
      largely focused on the rise in productivity in areas such as software development, where LLMs
      are being heavily utilized. In fact, I'm having a hard time writing this blog post without
      peeking at what the LLM is trying to guess I’m attempting to write next. At times, it's
      humbling to read that an LLM can write something so much more eloquently than I can. It’s
      dizzying reading what it thinks I should write next but instead fighting to express myself as
      I want. It’s a little eerie—which brings me to the cons. Outside of the tremendous energy
      consumption required for training and running LLMs, they are dulling our ability to think and
      perform for ourselves. The long-term consequences of this could be catastrophic, as the value
      of human creativity and mastery is on the decline. Why work hard or try when an LLM can
      generate it for you? What will happen when the world is filled with AI slop that will be used
      to train the next generation of LLMs, which will create even sloppier content? I can’t even
      begin to guess, but my goal is to continue using LLMs as a tool to improve my life. I
      understand that I must be highly skeptical of anything it generates for me and especially
      skeptical of generated content in areas where I am not an expert.
      <Spacer />
      As we navigate this AI landscape, I encourage you to consider the implications for your
      privacy. In today’s world, corporations chase the "big data" dollar by collecting as much user
      data as possible to build profiles that can later be sold to advertisers or monetized in other
      ways. My journey toward privacy has led me to{' '}
      <a href="https://huggingface.co/models" target="_blank" rel="noreferrer"></a>, where you may
      find all sorts of open-source LLMs that can be run locally on your own hardware. Some lessons
      to be learned:
      <ul>
        <li>
          The environment in which you run your LLM matters. For me, it was the ease-of-use and
          general UX that made the process much more enjoyable. I initially started with koboldcpp,
          then tried a couple of others, but ultimately settled on LM Studio as the simplest
          platform for my hardware.
        </li>
        <li>
          LLMs will run fastest on your GPU rather than your CPU, and your video card brand matters.
          Right now, NVIDIA is the go-to for most LLM tasks, thanks to its proprietary CUDA
          libraries for GPU acceleration. While CUDA is the leader, it’s not the only option. AMD
          has been making strides in the AI space with its competing ROCm platform. Alternatively,
          you may also run Vulkan or CPU-based runtimes, but they are just not as performant.
        </li>
        <li>
          The size of your GPU's VRAM matters a lot. This is because for an LLM model to run at peak
          speed, it must be fully loaded into memory. For example, a 70B parameter model will
          require significantly more VRAM than a 7B parameter model. If you have a high-end GPU with
          24GB of VRAM, you can run larger models like Llama 3 or GPT-4. If you have less VRAM, you
          may need to use smaller models or quantized versions. How I wish I could go back in time
          and buy a GPU with more VRAM!
        </li>
      </ul>
    </EntryBody>
  </BlogEntry>
);

export default Post;
