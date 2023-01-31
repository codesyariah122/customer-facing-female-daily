import { Vector } from '@components/KnowledgeCenter';

const NoDataFound = () => {
  return (
    <div className="h-full">
      <div className="flex-col">
        <h4 className="font-semibold">Oh No!</h4>
        <Vector name="no-content" />
        <p>It’s empty here. We will update this page soon.</p>
      </div>
    </div>
  );
};

export default NoDataFound;
