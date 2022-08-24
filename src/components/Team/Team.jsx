import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const teamData = [
    {
      id: 1,
      name: "Jenny Wilson",
      designation: "Co-Founder & CEO",
      imgSrc: "assets/img/team/01.jpg",
    },
    {
      id: 2,
      name: "Ralph Edwards",
      designation: "Co-Founder",
      imgSrc: "assets/img/team/02.jpg",
    },
    {
      id: 3,
      name: "Cameron Williamson",
      designation: "Creative Director",
      imgSrc: "assets/img/team/03.jpg",
    },
    {
      id: 4,
      name: "Jerome Bell",
      designation: "Marketing Director",
      imgSrc: "assets/img/team/04.jpg",
    },
    {
      id: 5,
      name: "Marvin McKinney",
      designation: "Lead Designer",
      imgSrc: "assets/img/team/05.jpg",
    },
    {
      id: 6,
      name: "Esther Howard",
      designation: "Motion Designer",
      imgSrc: "assets/img/team/06.jpg",
    },
    {
      id: 7,
      name: "Darrell Steward",
      designation: "Lead Developer",
      imgSrc: "assets/img/team/07.jpg",
    },
    {
      id: 8,
      name: "Jane Cooper",
      designation: "Senior Project Manager",
      imgSrc: "assets/img/team/08.jpg",
    },
  ];
  return (
    <div>
      <section className="container py-5 my-md-3 my-lg-5">
        <h2 className="h1 text-center pt-1 pb-3 mb-3 mb-lg-4">
          Our Leadership
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {teamData.map((member) => (
            <TeamCard key={member.id} data={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
