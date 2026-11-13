function StatusMessage({ type, text }) {
  return <p className={`status status-${type}`}>{text}</p>;
}

export default StatusMessage;
