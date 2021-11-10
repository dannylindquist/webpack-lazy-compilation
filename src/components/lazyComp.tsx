import React from "react";

export type LazyComponentProps = { name: string };

export const LazyComponent: React.FC<LazyComponentProps> = () => {
  return <div>LazyComponent1</div>;
};
