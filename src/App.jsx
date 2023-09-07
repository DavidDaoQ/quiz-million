import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 VNĐ");
  const data = [
    {
      id: 1,
      question:
        '"Ai muốn cao ngồi ghế/ Ai muốn thấp ngồi đòn/ Ai muốn đỏ bôi son/ Ai muốn vàng bôi nghệ..." Là những câu hát thuộc thể loại gì?',
      answers: [
        { text: "Ca dao", correct: false },
        { text: "Tục ngữ", correct: false },
        { text: "Đồng dao", correct: true },
        { text: "Thành ngữ", correct: false },
      ],
    },
    {
      id: 2,
      question:
        "Đâu là một trong những hình ảnh đặc trưng của làng quê Bắc Bộ?",
      answers: [
        { text: "Cây dừa", correct: false },
        { text: "Cây nho", correct: false },
        { text: "Cây vú sữa", correct: false },
        { text: "Cây đa", correct: true },
      ],
    },
    {
      id: 3,
      question:
        "Người ta thường nói: 'Mua trâu xem vó, mua ... xem chân'. Trong dấu ba chấm là con gì?",
      answers: [
        { text: "Gà", correct: false },
        { text: "Lợn", correct: false },
        { text: "Chó", correct: true },
        { text: "Vịt", correct: false },
      ],
    },
    {
      id: 4,
      question: "Câu nào chỉ người học trò đi thi đỗ đạt, hiển vinh?",
      answers: [
        { text: "Cá nằm trên thớt", correct: false },
        { text: "Cá chép vượt vũ môn", correct: true },
        { text: "Cá mè một lứa", correct: false },
        { text: "Cá rô gặp mưa rào", correct: false },
      ],
    },
    {
      id: 5,
      question:
        "Quốc gia nào trên thế giới có tên gọi theo phiên âm Hán - Việt là Gia Nã Đại?",
      answers: [
        { text: "Nhật Bản", correct: false },
        { text: "Hà Lan", correct: false },
        { text: "Jamaica", correct: false },
        { text: "Canada", correct: true },
      ],
    },
    {
      id: 6,
      question:
        "Ikebana là tên gọi của môn nghệ thuật truyền thống nào của Nhật Bản?",
      answers: [
        { text: "Trà đạo", correct: false },
        { text: "Cắm hoa", correct: true },
        { text: "Xếp giấy", correct: false },
        { text: "Thư pháp", correct: false },
      ],
    },
    {
      id: 7,
      question:
        "Ngôn ngữ giao tiếp chính, phổ biến ở Brazil là ngôn ngữ nào sau đây?",
      answers: [
        { text: "Bồ Đào Nha", correct: true },
        { text: "Anh", correct: false },
        { text: "Pháp", correct: false },
        { text: "Ý", correct: false },
      ],
    },
    {
      id: 8,
      question:
        "Vị thuốc nào thường dùng cho phụ nữ sau khi sinh bị mất hoặc tắc sữa?",
      answers: [
        { text: "Thảo quả", correct: false },
        { text: "Cam thảo", correct: false },
        { text: "Thông thảo", correct: true },
        { text: "Đỗ trọng", correct: false },
      ],
    },
    {
      id: 9,
      question:
        "Để đảm bảo năng suất và chất lượng, người ta thường trồng loài cây nào sau đây bằng củ của chính nó?",
      answers: [
        { text: "Khoai lang", correct: false },
        { text: "Gừng", correct: true },
        { text: "Sắn", correct: false },
        { text: "Cà rốt", correct: false },
      ],
    },
    {
      id: 10,
      question:
        "Ngọn núi nào sau đây gắn liền với câu chuyện Ông Đùng xếp núi, và truyền thuyết về kinh đô của Vua Hùng?",
      answers: [
        { text: "Nùng", correct: false },
        { text: "Yên Tử", correct: true },
        { text: "Tản viên", correct: false },
        { text: "Hồng Lĩnh", correct: true },
      ],
    },
    {
      id: 11,
      question:
        "BRICS - khối các nền kinh tế lớn nhất mới nổi hiện nay trên thế giới gồm bao nhiêu thành viên?",
      answers: [
        { text: "4", correct: false },
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "7", correct: true },
      ],
    },
    {
      id: 12,
      question:
        "Great Monlam Prayer - lễ hội đánh dấu bắt đầu một năm mới - là lễ hội của người dân vùng đất nào?",
      answers: [
        { text: "Tây Tạng", correct: true },
        { text: "Sê-bê-ri-a", correct: false },
        { text: "Ma-chu Pi-chu", correct: false },
        { text: "A-lát-ska", correct: false },
      ],
    },
    {
      id: 13,
      question:
        "Hai câu 'Ai về Tuy Phước ăn nem/ Ghé qua Hưng Thạnh mà xem tháp Chàm' nhắc đến tỉnh thành nào của nước ta?",
      answers: [
        { text: "Ninh Thuận", correct: false },
        { text: "Bình Thuận", correct: false },
        { text: "Bình Định", correct: true },
        { text: "Phú Yên", correct: false },
      ],
    },
    {
      id: 14,
      question:
        "Ngày 17/10/2022, Tổ chức Kỉ lục Guiness thế giới đã công nhận ngày nào trong tuần là 'ngày tồi tệ nhất tuần'?",
      answers: [
        { text: "Thứ hai", correct: true },
        { text: "Thứ tư", correct: false },
        { text: "Thứ sáu", correct: false },
        { text: "Chủ nhật", correct: false },
      ],
    },
    {
      id: 15,
      question:
        "Bộ tem bưu chính được phát hành vào ngày 25/12/2022 để kỷ niệm 100 năm ngày sinh của nhạc sĩ nào?",
      answers: [
        { text: "Văn Cao", correct: false },
        { text: "Đỗ Nhuận", correct: true },
        { text: "Phan Huỳnh Điểu", correct: false },
        { text: "Hoàng Văn", correct: false },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 600" },
        { id: 4, amount: "$ 800" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">Bạn kiếm được số tiền : {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    setTimeOut={setTimeOut}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
