export default function Card({
  title,
  details,
  icon,
  summary,
  link,
  children,
  size
}) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: size === 'sm' ? "2px" : "6px",
        }}
      >
        {link ? (
          <a target="_blank" rel="noreferrer" href={link} style={{ textDecoration: "none" }}>
            <h1 className="pixel-font">{title}</h1>
          </a>
        ) : (
          <h1 className="pixel-font">{title}</h1>
        )}
        {icon}
      </div>
      <div className="details">
        <div style={{ width: "35%", fontWeight: "bold" }}>
          {details?.map((detail) => (
            <p key={detail.field}>{detail.field}</p>
          ))}
        </div>
        <div style={{ width: "65%" }}>
          {details?.map((detail) => (
            <p key={detail.value}>{detail.value}</p>
          ))}
        </div>
      </div>
      <div className="summary" style={size === 'sm' ? {fontSize: 14} : {}}>{summary}</div>
      {children}
    </div>
  );
}
