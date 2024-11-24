function SummarySection({ summary }) {
  return (
    <div className="summarySection">
      <div className="summarySectionTitle">Summary</div>
      <pre className="summarySectionContent">{summary}</pre>
    </div>
  );
}

export default SummarySection;
