import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const Grid = ({ blok }) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns.map((blok) => {
        return (
          <StoryblokComponent blok={blok} key={blok._uid} />
        )
      })}
    </div>
  )
}

export default Grid