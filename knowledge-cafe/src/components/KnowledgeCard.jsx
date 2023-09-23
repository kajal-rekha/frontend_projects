import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const KnowledgeCard = ({ data, markAsReadHandler, spentTimesHandler }) => {
  const [color, setColor] = useState(false);
  const {
    property_image,
    user_image,
    user_name,
    user_title,
    heading_title,
    tags,
    read_time,
  } = data;

  return (
    <div className="knowledge-card">
      <img src={property_image} alt={user_name} className="knowledge-img" />

      <div className="knowledge-des">
        <div className="user-info">
          <div className="user">
            <div className="user-img">
              <img src={user_image} alt={user_title} />
            </div>
            <div className="user-title">
              <h3>{user_name}</h3>
              <p>{user_title}</p>
            </div>
          </div>
          <div className="read-times">
            <p>{read_time} minutes</p>
            <span onClick={() => spentTimesHandler(data)} className="bookmark">
              {!color ? (
                <BsBookmark onClick={() => setColor(!color)} />
              ) : (
                <BsBookmarkFill onClick={() => setColor(!color)} />
              )}
            </span>
          </div>
        </div>

        <div className="heading-title">
          <h2>{heading_title}</h2>
          <p className="tags">
            {tags.map((tag, i) => (
              <span key={i}>#{tag}</span>
            ))}
          </p>
        </div>

        <div className="mark-btn">
          <button onClick={() => markAsReadHandler(data)}>Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCard;
