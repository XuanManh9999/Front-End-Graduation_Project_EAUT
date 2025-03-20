import { useState } from "react";
import styles from "./QuestionListExam.module.scss";

const questions = [
  {
    id: 1,
    title: "Tính tổng hai số nguyên",
    input: "Nhập hai số nguyên a, b",
    output: "In ra tổng của a và b",
  },
  {
    id: 2,
    title: "Kiểm tra số nguyên tố",
    input: "Nhập một số nguyên n",
    output: "In ra 'YES' nếu n là số nguyên tố, ngược lại in 'NO'",
  },
  {
    id: 3,
    title: "Tính giai thừa",
    input: "Nhập một số nguyên dương n",
    output: "In ra giai thừa của n",
  },
  {
    id: 4,
    title: "Dãy Fibonacci",
    input: "Nhập một số nguyên n",
    output: "In ra n số đầu tiên của dãy Fibonacci",
  },
  {
    id: 5,
    title: "Sắp xếp mảng",
    input: "Nhập mảng gồm n số nguyên",
    output: "In ra mảng đã được sắp xếp theo thứ tự tăng dần",
  },
];

export default function QuestionListExam() {
  const [completed, setCompleted] = useState({});

  const toggleCompleted = (id) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id], // Đảo trạng thái hoàn thành
    }));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Danh sách bài tập</h3>
      <div className={styles.list}>
        {questions.map((q) => (
          <div key={q.id} className={styles.item}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={!!completed[q.id]}
              onChange={() => toggleCompleted(q.id)}
            />
            <div
              className={`${styles.content} ${
                completed[q.id] ? styles.completed : ""
              }`}>
              <div className={styles.name}>
                Câu {q.id}: {q.title}
              </div>
              <div className={styles.input}>
                <span className={styles.label}>📥 Input:</span> {q.input}
              </div>
              <div className={styles.output}>
                <span className={styles.label}>📤 Output:</span> {q.output}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
