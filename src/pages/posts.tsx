import React from "react";
import { HeadFC, navigate, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";
import { usePostsName } from "@/hooks/usePostsName";
import List from "@/components/list";
import { Large } from "@/components/typography";

const PostsPage: React.FC<PageProps> = ({ location }) => {
  const postNames = usePostsName();

  return (
    <PageLayout location={location} containerStyle="py-12">
      <List
        list={postNames}
        render={({ name }) => (
          <Large className="cursor-pointer" onClick={() => navigate(name)}>
            {name}
          </Large>
        )}
        className="gap-2"
        title="게시글"
        description="최근 게시글들을 볼 수 있습니다."
      />
    </PageLayout>
  );
};

export default PostsPage;

export const Head: HeadFC = () => <SEO titleSuffix="Posts" />;
