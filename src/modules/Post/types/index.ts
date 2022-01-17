/* usePost types */

type Banner = {
  data: {
    attributes: {
      alternativeText: string;
      caption: string;
      url: string;
    };
  };
};

type Tags = {
  data: [
    {
      id: number;
      attributes: {
        name: string;
        slug: string;
      };
    },
  ];
};

type Post = {
  id: number;
  attributes: {
    slug: string;
    title: string;
    description: string;
    read_time: string;
    publishedAt: string;
    content: string;
    banner: Banner;
    tags: Tags;
  };
};

type Slug = {
  attributes: {
    slug: string;
  };
};

export type PostAPIPayload = {
  data: Post[];
};

export type SlugsAPIPayload = {
  data: Slug[];
};

/* usePost types end */
