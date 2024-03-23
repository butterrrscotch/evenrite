import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Life Teams",
};

const TeamsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
    </>
  )
}

export default TeamsLayout