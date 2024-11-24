function EditSummarySection({ summary, setSummary }) {
  return (
    <div className="editSummarySection">
      <label htmlFor="summary">Summary</label>
      <textarea
        name="summary"
        id="summary"
        value={summary}
        onChange={(event) => {
          setSummary(event.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default EditSummarySection;
