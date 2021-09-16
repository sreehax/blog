// a child can either be multiple elements, one element, or a string
export type Children = JSX.Element[] | JSX.Element | string;

// use an interface since it's extendible
export interface ReactComponent {
    children?: Children
}

// what's defined in the md file
export type PostMetadataPart = {
    title: string,
    date: Date,
    description: string,
};

// blog post type
export type PostMetadata = PostMetadataPart & {
    id: string
};

export type Post = PostMetadata & {
    content: string
};

// export type PostMeta = {
//     title: string,
//     description: string,
//     date: string
// }

// export interface MdxModule {
//     info: PostMeta
// }

// export type FetchedPostMeta = {
//     link: string,
//     module: MdxModule
// }