import { getStoryblokApi } from "@storyblok/react/rsc";
import  StoryblokStory  from "@storyblok/react/story"


export default async function Home() {
  let { data } = await fetchData()

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  )
} 

export async function fetchData() {
  let storyblokApi = getStoryblokApi()

  let sbParams = {
    version: "draft",
    language: "en"
  };

  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"})
}