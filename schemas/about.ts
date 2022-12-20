//create a new schema for testimonials
// Path: sanity/schemas/testimonials.ts
// Compare this snippet from sanity/schemas/testimonials.ts:

export default {
  name: 'about',
  title: 'About',
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
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: false,
      },
    },
  ],
}

//add testimonials to the schema
// Path: sanity/schemas/index.ts
// Compare this snippet from sanity/schemas/index.ts:
// export const schemaTypes = [
//   testimonial,
// ]
