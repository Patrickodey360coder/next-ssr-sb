import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc"; 

const Page = ({blok}) => (
  <div className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body.map((blok) => {
      return (
        <StoryblokComponent blok={blok} key={blok._uid} />
      )
    })}
  </div>
)

export default Page