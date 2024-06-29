import { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span>-- Baru !!!</span>;
};

ArticleStatus.propTypes = {
  isNew: PropTypes.bool.isRequired,
};

function Article({ title, date, tags = [], isNew }) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{title}</h3>
      <small>
        Date: {date}, tags: {tags.join(", ")} {isNew ? "-- Baru !!" : "lama"}
        <ArticleStatus isNew={isNew} />
      </small>
      <div>Ditulis oleh {user.username}</div>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  isNew: PropTypes.bool.isRequired,
};

export default Article;
