// TreeNode.js
import React from 'react';

const TreeNode = ({ value }) => {
  return (
    <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-10 h-10">
      {value}
    </div>
  );
};

export default TreeNode;
