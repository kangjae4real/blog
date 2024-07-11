import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";
import List from "@/components/list";
import useAllMDX from "@/hooks/useAllMDX";
import PostPreview from "@/components/post-preview";

const PostsPage: React.FC<PageProps> = ({ location }) => {
  const posts = useAllMDX();

  return (
    <PageLayout location={location} containerStyle="py-12">
      <List
        list={posts}
        render={({ frontmatter, excerpt }) => <PostPreview {...frontmatter} excerpt={excerpt} />}
        className="gap-5"
        title="게시글"
        description="최근 게시글들을 볼 수 있습니다."
      />
    </PageLayout>
  );
};

export default PostsPage;

export const Head: HeadFC = () => <SEO titleSuffix="Posts" />;
