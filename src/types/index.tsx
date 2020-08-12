type TemplateKey = "blog-post";

export interface Tag {
  label: string;
  href: string;
}

export interface PostSnippet {
  title: string;
  summary: string;
  href: string;
  img: string;
  imgAlt?: string;
  tags: Tag[];
  publishedDate: Date;
}

export interface BlogPost {
  template: TemplateKey;
  publishedDate: Date;
  featured: boolean;
  title: string;
  description: string;
  img: string;
  imgAlt?: string;
  slug: string;
  tags: string[];
  content: JSX.Element;
}