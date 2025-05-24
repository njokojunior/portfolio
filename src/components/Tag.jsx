

function Tag({ children, color = "indigo", bgColor = "#D0BFFF" }) {
  return (
    <div className="tag" style={{ color: color, backgroundColor: bgColor }}>
      {children}
    </div>
  );
}

export default Tag;