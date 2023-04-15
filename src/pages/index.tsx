import React from "react";
import Layout from "@theme/Layout";
import HomepageHeader from "../components/HomePage";

export default function Home(): JSX.Element {
  return (
    <Layout description="Documentation of Hedystia packages, applications and others" wrapperClassName="pb-layout">
      <HomepageHeader />
    </Layout>
  );
}
