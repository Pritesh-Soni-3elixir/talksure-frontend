import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "./HostFormBody.scss";

import "react-datepicker/dist/react-datepicker.css";

const HostFormBody = () => {
  const [interests, setInterests] = useState(null);
  const [hostDetails, setHostDetails] = useState({
    title: "",
    description: "",
    tags: [],
    expireDate: null,
    linkType: "MP3",
    sponserImg: "",
    sponserLink: "",
    link: "",
  });

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/get-interest").then((res) => {
      const impData = res.data.data[0];
      console.log(impData);
      setInterests(impData);
    });
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setHostDetails((prevHost) => {
      return { ...prevHost, [name]: value };
    });
  };

  const handleSchedule = (e) => {
    e.preventDefault();
    console.log(hostDetails);
    axios
      .post("http://localhost:4000/api/v1/save-host", hostDetails)
      .then((res) => {
        console.log(res);
      });
  };

  const handleTagClick = (e) => {
    console.log("classlist", e.currentTarget.classList);
    if (e.currentTarget.classList.contains("active")) {
      // if the tag is already selected/active, we remove the class "active" and remove it from the state
      e.currentTarget.classList.remove("active");
      setHostDetails((prevHost) => {
        const newTags = prevHost.tags.filter(
          (tag) => tag !== e.target.innerHTML
        );
        console.log("after removing : tags : ", newTags);
        return { ...prevHost, tags: newTags };
      });
    } else {
      e.currentTarget.classList.add("active");
      setHostDetails((prevHost) => {
        console.log("add tag", prevHost.tags, e.target.innerHTML);
        return { ...prevHost, tags: [...prevHost.tags, e.target.innerHTML] };
      });
    }
  };

  return (
    <>
      <div>
        <h2 className="text-center mt-5">Host Form</h2>
      </div>
      <div className="col-xl-6 col-lg-7 m-auto mt-5 px-5">
        <div className="card border-light shadow-lg py-3 p-sm-4 p-md-5">
          <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block" />
          <div className="card-body position-relative zindex-2">
            <h2 className="card-title pb-3 mb-4">Get Online Consultation</h2>

            <form className="row g-4 needs-validation" noValidate>
              {/* Title */}
              <div className="col-12">
                <label htmlFor="title" className="form-label fs-base">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  className="form-control form-control-lg"
                  id="title"
                  required
                  onChange={handleOnChange}
                  value={hostDetails.title}
                />
                <div className="invalid-feedback">
                  Please enter a valid title!
                </div>
              </div>

              {/* Description */}
              <div className="col-12">
                <label htmlFor="description" className="form-label fs-base">
                  Description
                </label>
                <input
                  type="email"
                  name="description"
                  className="form-control form-control-lg"
                  id="description"
                  required
                  onChange={handleOnChange}
                  value={hostDetails.description}
                />
              </div>

              {/* Expiration Date */}
              <div className="col-sm-6" data-provide="datepicker">
                <label htmlFor="exp-date" className="form-label fs-base">
                  Expiration Date
                </label>
                <DatePicker
                  className="form-control form-control-lg"
                  dateFormat="dd/MM/yyyy"
                  selected={hostDetails.expireDate}
                  name="expireDate"
                  onChange={(date) =>
                    setHostDetails((prevHost) => {
                      return { ...prevHost, expireDate: date };
                    })
                  }
                />

                <div className="invalid-feedback">
                  Please provid a valid date!
                </div>
              </div>

              {/* Host */}
              <div className="col-12">
                <label htmlFor="host" className="form-label fs-base">
                  Host
                </label>
                <select
                  className="form-select form-select-lg"
                  id="host"
                  required
                  defaultValue="Steev"
                >
                  <option value disabled key={"choose host"}>
                    Choose a Host
                  </option>
                  <option key={"steev"} value="Therapist">
                    Steev
                  </option>
                </select>
                <div className="invalid-feedback">
                  Choose a specialist from the list!
                </div>
              </div>

              {/* interests */}
              {/* <div>
                {interests ? JSON.stringify(interests) : "nothing fetched"}
              </div> */}

              {/* Languages */}
              <div className="col-12">
                <label htmlFor="host" className="form-label fs-base">
                  Languages
                </label>
                <br />
                {interests &&
                  interests.languages.map((language) => (
                    <span
                      className="tag"
                      key={language.name}
                      onClick={handleTagClick}
                      value={language.name}
                    >
                      {language.name}
                    </span>
                  ))}
                <div className="invalid-feedback">
                  Choose a langauge from the list!
                </div>
              </div>

              {/* Regions */}
              <div className="col-12">
                <label htmlFor="host" className="form-label fs-base">
                  Regions
                </label>
                <br />
                {interests &&
                  interests.regions.map((region) => (
                    <span
                      className="tag"
                      key={region.name}
                      onClick={handleTagClick}
                      value={region.name}
                    >
                      {region.name}
                    </span>
                  ))}
                <div className="invalid-feedback">
                  Choose a region from the list!
                </div>
              </div>

              {/* Topic */}
              <div className="col-12">
                <label htmlFor="host" className="form-label fs-base">
                  Topic
                </label>
                <br />
                {interests &&
                  interests.topics.map((topic) => (
                    <span
                      className="tag"
                      key={topic.name}
                      onClick={handleTagClick}
                      value={topic.name}
                    >
                      {topic.name}
                    </span>
                  ))}
                <div className="invalid-feedback">
                  Choose a topic from the list!
                </div>
              </div>

              {/* Link Type */}
              <div className="col-12">
                <label htmlFor="link-type" className="form-label fs-base">
                  Link Type
                </label>
                <select
                  className="form-select form-select-lg"
                  id="link-type"
                  required
                  onChange={handleOnChange}
                  value={hostDetails.linkType}
                  name="linkType"
                >
                  <option value disabled key={"choose link"}>
                    Choose a Link type
                  </option>
                  <option key={"MP3"} value="MP3">
                    MP3
                  </option>
                  <option key={"MP4"} value="MP4">
                    MP4
                  </option>
                  <option key={"Youtube"} value="Youtube">
                    Youtube
                  </option>
                </select>
                <div className="invalid-feedback">
                  Choose a specialist from the list!
                </div>
              </div>

              {/* Link */}
              <div className="col-12">
                <label htmlFor="link" className="form-label fs-base">
                  Link
                </label>
                <input
                  type="url"
                  className="form-control form-control-lg"
                  id="link"
                  required
                  onChange={handleOnChange}
                  name="link"
                  value={hostDetails.link}
                />
                {/* <div className="invalid-feedback">
                  Please enter a valid title!
                </div> */}
              </div>

              {/* Brought By (Website) */}
              <div className="col-12">
                <label
                  htmlFor="brought-by-website"
                  className="form-label fs-base"
                >
                  Brought By (Website)
                </label>
                <input
                  type="url"
                  className="form-control form-control-lg"
                  id="brought-by-website"
                  required
                  onChange={handleOnChange}
                  name="sponserLink"
                  value={hostDetails.sponserLink}
                />
                {/* <div className="invalid-feedback">
                  Please enter a valid title!
                </div> */}
              </div>

              {/* Brought By (Logo) */}
              <div className="col-12">
                <label htmlFor="brought-by-logo" className="form-label fs-base">
                  Brought By (Logo)
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="brought-by-logo"
                  required
                  onChange={handleOnChange}
                  name="sponserImg"
                  value={hostDetails.sponserImg}
                />
                {/* <div className="invalid-feedback">
                  Please enter a valid title!
                </div> */}
              </div>

              <div className="col-12 pt-2 pt-sm-3">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary w-100 w-sm-auto"
                  onClick={handleSchedule}
                >
                  Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostFormBody;
