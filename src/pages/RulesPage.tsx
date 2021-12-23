import React, { useEffect } from "react";

export interface RulesPageProps {
  changePageName: (pageName: string) => void;
}

export default function RulesPage({ changePageName }: RulesPageProps) {
  useEffect(() => {
    changePageName("Правила");
  }, [changePageName]);

  return <>Правила</>;
}
