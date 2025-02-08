import { useState } from "react";
import PropTypes from "prop-types";
const Card = ({ repo }) => {
  const colorList = [
    "#F8E71C", // Vàng sáng
    "#50E3C2", // Xanh ngọc
    "#4A90E2", // Xanh dương nhạt
    "#D0021B", // Đỏ tươi
    "#BD10E0", // Tím neon
    "#FF9800", // Cam sáng
    "#8BC34A", // Xanh lá mạ
    "#FF4081", // Hồng sáng
    "#00E676", // Xanh lục neon
    "#B3E5FC", // Xanh da trời nhạt
  ];
  const getRandomColor = () =>
    colorList[Math.floor(Math.random() * colorList.length)];

  const [transformStyle, setTransformStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
  });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Lấy vị trí con trỏ so với phần tử
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Tính toán góc xoay
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 25; // Xoay theo chiều dọc
    const rotateY = ((x - centerX) / centerX) * -25; // Xoay theo chiều ngang

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1,1,1)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    });
  };

  return (
    <div
      className="bg-gray-900/80 p-4 rounded-2xl sm:w-[360px] w-full flex flex-col items-start transition-transform duration-200"
      style={transformStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hình ảnh */}
      <div className="relative w-full h-[230px]">
        <img
          src={repo.image}
          alt={`${repo.name} Image`}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Nội dung */}
      <div className="flex flex-col mt-5">
        <h2 className="font-bold text-2xl text-white">{repo.name}</h2>
        <p className="text-sm text-gray-400 mt-2">{repo.description}</p>
      </div>

      {/* Ngôn ngữ */}
      <div className="mt-4 flex flex-wrap gap-2">
        {repo.languages.map((lang, index) => (
          <p
            key={index}
            className="text-sm"
            style={{ color: getRandomColor() }}
          >
            #{lang}
          </p>
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Card;
