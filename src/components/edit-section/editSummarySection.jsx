import "/src/styles/edit-section/editSummarySection.css";

function EditSummarySection({ summary, setSummary }) {
  return (
    <div className="editSummarySection">
      <div className="editSectionTitle">Summary</div>

      <div className="summaryContent">
        <label htmlFor="summary">Summary: </label>
        <textarea
          name="summary"
          id="summary"
          value={summary}
          onChange={(event) => {
            setSummary(event.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default EditSummarySection;
