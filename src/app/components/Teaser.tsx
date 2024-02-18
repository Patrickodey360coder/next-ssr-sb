import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";

const Teaser = ( {blok} ) => {
  return (
    <>
      <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
        {blok.headline}
      </h2>
      <Image 
        className="w-200 h-100"
        src={blok.image.filename} 
        width={100}
        height={100}
        alt={blok.image.title} 
      />
    </>
  )
}

export default Teaser