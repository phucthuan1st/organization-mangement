import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DocumentList.css"; // Update the import for the CSS file
import documentList from "./mockDocumentData.json"; // as database


const DocumentList = ({ onItemClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [documentsData, setDocumentsData] = useState([]);

  // TODO: fetch data from server API
  useEffect(() => {
    // Simulate fetching data from an API (replace with your actual API endpoint)
    const fetchData = async () => {
      try {
        const data = documentList;
        setDocumentsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter documents based on the search term
  const filteredDocuments = documentsData.filter((document) =>
    document.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="documentList">
      {/* Top Flex with Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Bottom Flex with Card Collection */}
      <div className="card-frame">
        <div className="card-collection">
          {filteredDocuments.map((document) => (
            <Link
              key={document.documentId}
              to={`/documents_information/${document.documentId}`}
              className="document-card"
              onClick={() => onItemClick(document.documentId)}
            >
              <img
                src={document.thumbnailUrl}
                alt="Thumbnail"
                className="document-thumbnail"
              />
              <div className="document-info">
                <h2 className="document-title">{document.title}</h2>
                <p className="document-type">{`Type: ${document.type}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentList;
