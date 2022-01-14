/* usePosts types */

type PostBanner = {
  data: {
    attributes: {
      alternativeText: string;
      formats: {
        medium: {
          url: string;
        };
      };
    };
  };
};

type PostTags = {
  data: [
    {
      id: number;
      attributes: {
        name: string;
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
    banner: PostBanner;
    tags: PostTags;
  };
};

export type PostsAPIPayload = {
  data: Post[];
};

/* usePosts types end */
