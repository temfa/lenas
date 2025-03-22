import { SingleOrderBody } from "@/components/single-order-body";
import React from "react";

const SingleOrder = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <>
      <SingleOrderBody id={slug} />
    </>
  );
};

export default SingleOrder;
