import React from 'react'
import {DiscussionEmbed} from 'disqus-react'
import DocItem from '@theme-original/DocItem';

export default function DocItemWrapper(props) {
  const { metadata } = props.content
  const { comments = true } = metadata.frontMatter

  const title = `${metadata.title.split('. ').reverse()[0]} - How To`
  const slug = `https://howto.novalagung.com${metadata.slug}`

  return (
    <>
      <DocItem {...props} />
      <div style={{marginTop: '30px'}}>
        {comments && (
          <DiscussionEmbed
            shortname='dasarpemrogramangolang'
            config={{
              url: slug,
              identifier: slug,
              title,
            }}
          />
        )}
      </div>
    </>
  );
}
