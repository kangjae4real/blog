export const INDEX_PAGE = "/";

export const POSTS_PAGE = "/posts";
export const getPostDetailPage = (slug: string) => `${POSTS_PAGE}/${slug}`;

export const RESUME_PAGE = "/resume";

export const PORTFOLIO_PAGE = "/portfolio";

// export const PAGES = [INDEX_PAGE, POSTS_PAGE, RESUME_PAGE, PORTFOLIO_PAGE] as const;
export const PAGES = [INDEX_PAGE, POSTS_PAGE, RESUME_PAGE] as const;
export type Pages = (typeof PAGES)[number];

export const PAGES_HUMANIZE_MAP: Record<Pages, string> = {
  "/": "Home",
  "/posts": "Posts",
  "/resume": "Resume",
  // "/portfolio": "Portfolio",
};
export const humanizePage = (path: Pages) => PAGES_HUMANIZE_MAP[path];
