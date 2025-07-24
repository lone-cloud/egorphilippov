interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => (
  <div className="inline-block mb-4">
    <h1 className="uppercase font-bold text-2xl leading-tight">{title}</h1>
  </div>
);

export default PageTitle;
