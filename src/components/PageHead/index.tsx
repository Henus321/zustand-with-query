type PageHeadProps = {
    title: string;
};

const PageHead = ({ title }: PageHeadProps) => {
    return (
        <div className="flex mb-2">
            <h2 className="text-2xl">{title}</h2>
            {/* TODO Breadcrumbs */}
        </div>
    );
};

export default PageHead;
