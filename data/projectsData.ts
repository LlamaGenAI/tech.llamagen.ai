interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'LlamaGen.AI',
    description: `An AI-powered comic creation platform that helps artists generate consistent 
    characters and storylines across multiple panels. With support for 50+ languages and 
    4K ultra-HD imagery, it enables creators to transform their ideas into compelling comics, 
    manga, and webtoons.`,
    imgSrc: 'https://cdn.llamagen.ai/web_public/releases/AI_Comic_Strips_Maker_Free_45.webp',
    href: 'https://llamagen.ai',
  },
  {
    title: 'Llama Canvas',
    description: `A collaborative storytelling platform that combines AI-powered narrative generation 
    with visual storyboarding. Writers and artists can work together to create interactive stories, 
    with AI assistance for plot development, character arcs, and scene visualization.`,
    imgSrc: 'https://cdn.llamagen.ai/web_public/llama_canvas/llama-canvas-gen-comics.webp',
    href: 'https://canvas.llamagen.ai',
  },

]

export default projectsData
