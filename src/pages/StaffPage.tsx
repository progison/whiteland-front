import React, { useEffect } from "react";

export interface StaffPageProps {
  changePageName: (pageName: string) => void;
}

export default function StaffPage({ changePageName }: StaffPageProps) {
  useEffect(() => {
    changePageName("Персонал");
  }, [changePageName]);

  return <>Персонал</>;
}
