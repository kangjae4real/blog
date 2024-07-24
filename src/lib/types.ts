export interface FileName {
  name: string;
}

export interface FileNodes {
  nodes: Array<FileName>;
}

export interface AllFile {
  allFile: FileNodes;
}

export interface Metadata {
  title: string;
  url: string;
  description: string;
  siteLanguage: string;
}

export interface SiteMetadata {
  siteMetadata: Metadata;
}

export interface Site {
  site: SiteMetadata;
}

export interface ID {
  id: string;
}

export interface Excerpt {
  excerpt: string;
}

export interface Images {
  fallback: {
    src: string;
    srcSet: string;
    sizes: string;
  };
  sources: Array<string>;
}

export interface GatsbyImageData {
  layout: string;
  backgroundColor: string;
  images: Images;
  width: number;
  height: number;
}

export interface ChildImageSharp {
  gatsbyImageData: GatsbyImageData;
}

export interface ThumbnailImage {
  childImageSharp: ChildImageSharp;
}

export interface FrontMatterData {
  title: string;
  date: string;
  slug: string;
  thumbnail_image: ThumbnailImage;
  thumbnail_image_alt: string;
}

export interface FrontMatter {
  frontmatter: FrontMatterData;
}

export interface MDXNodes {
  nodes: Array<FrontMatter & ID & Excerpt>;
}

export interface AllMDX {
  allMdx: MDXNodes;
}

export interface MDX {
  mdx: FrontMatter;
}

export type Heading = "h1" | "h2" | "h3" | "h4";

export type List = "ul" | "ol" | "li";

export type Text = "p" | "blockquote" | "code" | "a";

export type ComponentsKey = Heading | List | Text;

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
