import Heading from "../../components/Heading";
import { Aperture } from "lucide-react";
const Achievements = () => {
  const timelineData = [
    {
      id: 1,
      title: "Sinh vien 5 tot", // Tiêu đề
      time: "2021-2022", //Thời gian
      description:
        '"5 Good Students" at the faculty level is an award for students with good achievements in 5 areas: study, ethics, physical strength, volunteering and integration.', //Mô tả
      image: "./sinhviennamtot.jpg", //Hình ảnh minh chứng
      organization: "Faculty of Information Technology", //Tên tổ chức
    },
    {
      id: 2,
      title: "Certificate of Merit for Excellent Students", // Tiêu đề
      time: "2021-2022", //Thời gian
      description:
        "Certificate of Merit for Excellent Students is an award given to students who have achieved good or excellent results in the academic year including both semesters 1 and 2. The award aims to promote the learning spirit of students.",
      //Mô tả
      image: "/sinhviengioi-1.jpg", //Hình ảnh minh chứng
      organization: "Hoai An Education Promotion Association", //Tên tổ chức
    },
    {
      id: 3,
      title: "Certificate of Merit for Excellent Students", // Tiêu đề
      time: "2023-2024", //Thời gian
      description:
        "Certificate of Merit for Excellent Students is an award given to students who have achieved good or excellent results in the academic year including both semesters 1 and 2. The award aims to promote the learning spirit of students.", //Mô tả
      image: "/sinhviengioi-2.jpg", //Hình ảnh minh chứng
      organization: "Hoai An Education Promotion Association", //Tên tổ chức
    },
    {
      id: 4,
      title: "Information Technology Talent Search Contest", // Tiêu đề
      time: "2024", //Thời gian
      description:
        "The Ho Chi Minh City IT Talent Search Contest is a contest to search for talents in many fields for students of schools in Ho Chi Minh City. Although we only won the consolation prize, my teammates and I are still proud of it.", //Mô tả
      image: "/codehub.jpg", //Hình ảnh minh chứng
      organization: "HCA - Hoi tin hoc Tp.HCM", //Tên tổ chức
    },
  ];

  return (
    <section
      id="achievement"
      className="w-full min-h-screen h-auto mt-4 px-24 flex flex-col justify-center items-center"
    >
      <Heading text={"What have I achieved so far?"} size={32} font="" />
      <Heading text={"My achievements"} size={46} font="bold" />
      <div className="relative">
        <div
          className={`absolute top-0 left-24 md:left-1/2 w-1 bg-gray-200 h-full transform md:-translate-x-1/2 flex flex-col`}
        >
          {timelineData
            .slice()
            .reverse()
            .map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center relative`}
                style={{ height: `${(1 / timelineData.length) * 100}%` }}
              >
                <div
                  className={`flex flex-row ${
                    index % 2 === 0
                      ? "max-md:flex-row-reverse "
                      : "flex-row-reverse"
                  }`}
                >
                  <>
                    <div
                      className={`px-5 relative ${
                        index % 2 === 0
                          ? "md:left-[60px] max-md:right-[60px]"
                          : "right-[60px]"
                      }`}
                    >
                      <div className="bg-gray-800 p-2 rounded-full border-4 border-purple-500">
                        <Aperture />
                      </div>
                    </div>
                    <div
                      className={`text-xl font-semibold relative top-2 h-8 transition-none ${
                        index % 2 === 0
                          ? "md:left-14 max-md:right-7"
                          : "right-7"
                      }`}
                      style={{ width: "120px" }}
                    >
                      {item.time}
                    </div>
                  </>
                </div>
              </div>
            ))}
        </div>

        {timelineData
          .slice()
          .reverse()
          .map((item, index) => (
            <div
              key={index}
              className={`flex items-center mb-10 max-w-[1000px]  ${
                index % 2 === 0
                  ? "flex-row-reverse md:flex-row"
                  : " flex-row-reverse"
              }`}
            >
              <div className={`md:w-1/2 max-md:ml-24 p-4 -mx-4`}>
                <div className="bg-gray-800/80 p-6 rounded-lg shadow-lg -z-10">
                  <h3 className="text-xl font-bold text-center mb-2">
                    {item.title} -{" "}
                    <span className="text-blue-500">{item?.time}</span>
                  </h3>
                  <p className="italic text-sm mb-4 text-right">
                    {item?.organization}
                  </p>
                  <p className="text-sm mb-4">{item?.description}</p>
                  <img src={item?.image} alt="" className="w-full p-3" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Achievements;
