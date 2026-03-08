import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSave, FaArrowLeft, FaSpinner } from "react-icons/fa";
import { useParams } from "react-router";

const ResultEntryPage = ({ onBack }) => {
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [examData, setExamData] = useState(null);
  const { examId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const examRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/exam-details/${examId}`,
        );
        const resultsRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/get-edit-results?examId=${examId}`,
        );

        const { exam, students } = examRes.data;
        const savedResults = resultsRes.data.data || [];

        setExamData(exam);

        const mergedData = students.map((student) => {
          const studentPrevResult = savedResults.find(
            (r) => r.student?._id === student._id,
          );

          return {
            studentOid: student._id,
            name: student.name,
            roll: student.roll,
            subjects: exam.subjectsConfig.map((config) => {
              const savedSub = studentPrevResult?.subjects?.find(
                (s) => s.subjectName === config.name,
              );
              return {
                subjectName: config.name,
                fullMarks: config.fullMarks,
                obtainedMarks: savedSub ? savedSub.obtainedMarks : 0,
              };
            }),
          };
        });
        setAllResults(mergedData);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (examId) fetchData();
  }, [examId]);

  const handleMarkChange = (studentOid, subjectName, value, fullMarks) => {
    const numValue = Number(value);
    if (numValue < 0 || numValue > fullMarks) return;

    setAllResults((prev) =>
      prev.map((s) =>
        s.studentOid === studentOid
          ? {
              ...s,
              subjects: s.subjects.map((sub) =>
                sub.subjectName === subjectName
                  ? { ...sub, obtainedMarks: numValue }
                  : sub,
              ),
            }
          : s,
      ),
    );
  };

  const handleSave = async () => {
    if (!window.confirm("Save all changes?")) return;
    setSaving(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/save-bulk`, {
        examId: examId,
        allResults: allResults,
        subjectsConfig: examData.subjectsConfig,
      });
      alert("Results saved successfully!");
    } catch (err) {
      alert("Failed to save.");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !examData)
    return (
      <div className="p-10 text-center">
        <FaSpinner className="animate-spin inline" /> Loading...
      </div>
    );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto mb-6 flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
        >
          <FaArrowLeft /> Back
        </button>
        <h2 className="text-2xl font-bold">Entry: {examData.examName}</h2>
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
        >
          {saving ? "Saving..." : "Save All"}
        </button>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Roll</th>
              <th className="border p-2">Name</th>
              {examData.subjectsConfig.map((sub) => (
                <th key={sub.name} className="border p-2">
                  {sub.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allResults.map((studentRow) => (
              <tr key={studentRow.studentOid} className="hover:bg-gray-50">
                <td className="border p-2 text-center">{studentRow.roll}</td>
                <td className="border p-2">{studentRow.name}</td>
                {studentRow.subjects.map((sub) => (
                  <td key={sub.subjectName} className="border p-2 text-center">
                    <input
                      type="number"
                      className="w-16 border rounded p-1 text-center"
                      value={sub.obtainedMarks}
                      onChange={(e) =>
                        handleMarkChange(
                          studentRow.studentOid,
                          sub.subjectName,
                          e.target.value,
                          sub.fullMarks,
                        )
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultEntryPage;
