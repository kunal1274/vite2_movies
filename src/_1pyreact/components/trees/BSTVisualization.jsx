// BSTVisualization.js
import React, { useState } from 'react';
import TreeNode from './TreeNode';

// Binary Search Tree class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertRecursive(this.root, newNode);
    }
  }

  _insertRecursive(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertRecursive(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertRecursive(node.right, newNode);
      }
    }
  }

  search(value) {
    return this._searchRecursive(this.root, value);
  }

  _searchRecursive(node, value) {
    if (node === null) return false;
    if (value === node.value) return true;
    if (value < node.value) {
      return this._searchRecursive(node.left, value);
    } else {
      return this._searchRecursive(node.right, value);
    }
  }

  // Optional: Implement other operations like deletion, traversal (inorder, preorder, postorder)
}

const BSTVisualization = () => {
  const [bst, setBST] = useState(new BST());
  const [insertValue, setInsertValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleInsert = () => {
    if (insertValue.trim() !== '') {
      bst.insert(parseInt(insertValue));
      setInsertValue('');
    }
  };

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      const result = bst.search(parseInt(searchValue));
      setSearchResult(result ? 'Found' : 'Not Found');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Binary Search Tree Visualization</h2>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Enter value to insert"
          className="p-2 border border-gray-300 mr-2"
          value={insertValue}
          onChange={(e) => setInsertValue(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleInsert}
        >
          Insert
        </button>
      </div>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Enter value to search"
          className="p-2 border border-gray-300 mr-2"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
        {searchResult && <p className="mt-2">Search Result: {searchResult}</p>}
      </div>

      {/* Display BST */}
      <div>
        {bst.root && (
          <div>
            <h3 className="text-xl font-bold mb-2">Binary Search Tree</h3>
            {renderTree(bst.root)}
          </div>
        )}
      </div>
    </div>
  );
};

// Function to recursively render the BST nodes
const renderTree = (node) => {
  if (node === null) return null;

  return (
    <div key={node.value} className="flex items-center">
      <TreeNode value={node.value} />
      <div className="ml-4">
        {renderTree(node.left)}
        {renderTree(node.right)}
      </div>
    </div>
  );
};

export default BSTVisualization;
