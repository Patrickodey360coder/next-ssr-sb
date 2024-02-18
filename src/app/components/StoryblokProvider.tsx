"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import Page from "./Page";

storyblokInit({
  accessToken: "ZSCyML5yxIGKaWfielJWBQtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page,
  },
  apiOptions: {
    region: ""
  }
})


export default function StoryblokProvider({ children }) {
  return children
}