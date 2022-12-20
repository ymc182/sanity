//create a new schema for testimonials
// Path: sanity/schemas/testimonials.ts
// Compare this snippet from sanity/schemas/testimonials.ts:

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    },
  ],
}

//add testimonials to the schema
// Path: sanity/schemas/index.ts
// Compare this snippet from sanity/schemas/index.ts:
// export const schemaTypes = [
//   testimonial,
// ]
