export interface FileName {
  name: string;
}

export interface Nodes {
  nodes: Array<FileName>;
}

export interface AllFile {
  allFile: Nodes;
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
