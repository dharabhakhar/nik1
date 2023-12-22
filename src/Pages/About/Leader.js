import React from "react";

export default function Leader() {
  const Teams = [
    {
      img: require("../../images/avatar/IMG-1.png"),
      name: "John Smith",
      position: "Graphic Designer",
    },
    {
      img: require("../../images/avatar/IMG-2.png"),
      name: "Lucas William",
      position: "CEM - digiNova",
    },
    {
      img: require("../../images/avatar/IMG-3.png"),
      name: "Floyd Miles",
      position: "Photographer",
    },
    {
      img: require("../../images/avatar/IMG-4.png"),
      name: "Chris Patt",
      position: "Photographer",
    },
    {
      img: require("../../images/avatar/IMG-5.png"),
      name: "Kathryn Murphy",
      position: "Graphic Designer",
    },
    {
      img: require("../../images/avatar/IMG-6.png"),
      name: "Katty Perry",
      position: "CEO - AIbank",
    }
  ];
  return (
    <>
      <div class="teams-block pt-80 pb-80">
        <div class="container">
          <div class="heading text-center">
            <div class="heading3 text-center">Meet our leader</div>
            <div class="text-center mt-12">
              Discover exceptional experiences through testimonials from our
              satisfied customers.
            </div>
          </div>
          <div class="list-member row row-gap-32 mt-40">
            {Teams.map((team, i) => {
              return (
                <>
                  <div class="col-lg-4 col-sm-6">
                    <div class="member-item">
                      <a class="bg-img" href="/team-detail">
                        <img class="w-100 bora-28" src={team.img} alt="" />
                      </a>
                      <div class="member-infor mt-20 flex-between">
                        <a class="left" href="/team-detail">
                          <div class="name heading5">{team.name}</div>
                          <div class="position caption1 text-on-surface-variant1 mt-4">
                            {team.position}
                          </div>
                        </a>
                        <div class="right">
                          <a
                            class="icon w-48 h-48 bora-50 bg-surface flex-center hover-button-blue"
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i class="icon-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
