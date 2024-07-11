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

export interface FrontMatterData {
  title: string;
  date: string;
  slug: string;
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
