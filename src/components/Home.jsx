import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [moreOsh, setMoreOsh] = useState(true);
  const [moreSomsa, setMoreSomsa] = useState(true);
  const [moreKabob, setMoreKabob] = useState(true);
  const { t } = useTranslation();

  const OshDate = "01.06.2020 ";
  const SomsaDate = "22.03.2021 ";
  const KabobDate = "15.12.2022 ";

  return (
    <>
      <div className="container ">
        <div
          className="d-flex  row align-items-start justify-content-between"
          style={{ padding: "50px 0px" }}
        >
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkudmlhnEeCZQSyy74Xcd1VaaKTM5SRkZCeTgDn6uOyic"
              className="card-img-top"
              style={{ height: "13rem" }}
              alt={t("app_title")}
            />
            <div className="card-body ">
              <h4 className="card-title">{t("titleOsh")}</h4>
              <b className="text mb-2 text-primary fw-light">
                {OshDate}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </b>
              <p className="card-text mt-3">
                {moreOsh
                  ? t("FullTextOsh").substring(0, 100) + "..."
                  : t("FullTextOsh")}
              </p>
              <div className="d-grid mt-5 gap-2">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={() => setMoreOsh(!moreOsh)}
                >
                  {moreOsh ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        fill="currentColor"
                        className="bi bi-chevron-compact-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        fill="currentColor"
                        className="bi bi-chevron-compact-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://makepedia.uz/wp-content/uploads/2018/06/samsa.jpg"
              className="card-img-top"
              style={{ height: "13rem" }}
              alt={t("app_title")}
            />
            <div className="card-body ">
              <h5 className="card-title">{t("titleSomsa")}</h5>
              <b className="text mb-2 text-primary fw-light">
                {SomsaDate}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </b>
              <p className="card-text mt-3">
                {moreSomsa
                  ? t("FullTextSomsa").substring(0, 100) + "..."
                  : t("FullTextSomsa")}
              </p>
              <div className="d-grid mt-5 gap-2">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={() => setMoreSomsa(!moreSomsa)}
                >
                  {moreSomsa ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        fill="currentColor"
                        className="bi bi-chevron-compact-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        fill="currentColor"
                        className="bi bi-chevron-compact-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/08/42/28/79/caption.jpg"
              className="card-img-top"
              style={{ height: "13rem" }}
              alt={t("app_title")}
            />
            <div className="card-body ">
              <h5 className="card-title">{t("titleKabob")}</h5>
              <b className="text mb-2 text-primary fw-light">
                {OshDate}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </b>
              <p className="card-text mt-3">
                {moreKabob
                  ? t("FullTextKabob").substring(0, 100) + "..."
                  : t("FullTextKabob")}
              </p>
              <div className="d-grid mt-5 gap-2">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={() => setMoreKabob(!moreKabob)}
                >
                  {moreKabob ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        fill="currentColor"
                        className="bi bi-chevron-compact-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        fill="currentColor"
                        className="bi bi-chevron-compact-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
