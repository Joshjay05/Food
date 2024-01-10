import React from "react";
import { IoIosStar } from "react-icons/io";
import buka from "../Image/Bukka 2 1.png";
import buk from "../Image/choice.png";
import bk from "../Image/kobe delicious.png";
import bu from "../Image/Bukka Grill 1 1.png";

const OtherVendors = () => {
  return (
    <div>
      <article className="vendors-container">
        <p>Other Vendors</p>
        <article className="food-vendors">
          <div
            style={{
              position: "relative",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            className="img-container"
          >
            <img
              src={buk}
              alt="Background"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <p
              style={{
                position: "absolute",
                top: "10%",
                left: "75%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#f6a63d7f",
                color: "white",

                borderRadius: "5px",
                textAlign: "center",
                width: "50%",
              }}
            >
              10% discount
            </p>
            <p
              style={{
                position: "absolute",
                top: "45%",
                left: "75%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                // padding: "2px 10px",
                borderRadius: "5px",
                textAlign: "center",
                width: "50%",
              }}
            >
              Tasty
            </p>

            <span
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="food_description">
                <span className="vendor-name">Mama J Buka</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <IoIosStar
                    style={{ color: "#28D1FF", background: "#ffffff" }}
                  />
                  <span>
                    4.9 <span style={{ color: "#3333" }}>( 500+) </span>
                  </span>
                </span>
              </div>
            </span>
          </div>

          <div
            style={{
              position: "relative",
              width: "300px",
            }}
            className="img-container"
          >
            <img
              src={buka}
              alt="Background"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <div className="food_description">
              <span className="vendor-name">Choice Meal</span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <IoIosStar
                  style={{ color: "#28D1FF", background: "#ffffff" }}
                />
                <span>
                  4.7 <span style={{ color: "#3333" }}>( 500+) </span>
                </span>
              </span>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              width: "300px",
            }}
            className="img-container"
          >
            <img
              src={bk}
              alt="Background"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <p
              style={{
                position: "absolute",
                top: "45%",
                left: "75%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                borderRadius: "5px",
                textAlign: "center",
                width: "50%",
              }}
            >
              local food
            </p>
            <div className="food_description">
              <span className="vendor-name">Kobe Delicious</span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <IoIosStar
                  style={{ color: "#28D1FF", background: "#ffffff" }}
                />
                <span>
                  4.9 <span style={{ color: "#3333" }}>(374) </span>
                </span>
              </span>
            </div>
          </div>

          <div className="food_image-container">
            <img
              src={bu}
              alt="Background"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <div className="food-txt"></div>
            <p
              style={{
                position: "absolute",
                top: "10%",
                left: "70%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#f6a63d7f",
                color: "white",
                borderRadius: "5px",
                textAlign: "center",
                width: "50%",
              }}
            >
              10% discount
            </p>
            <p
              //   className="discount"
              style={{
                position: "absolute",
                top: "45%",
                left: "70%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                // padding: "2px 10px",
                borderRadius: "5px",
                textAlign: "center",
                width: "50%",
              }}
            >
              Tasty grill
            </p>
            <div className="food_description">
              <span className="vendor-name">Giddy Grills</span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <IoIosStar
                  style={{ color: "#28D1FF", background: "#ffffff" }}
                />
                <span>
                  4.9 <span style={{ color: "#3333" }}>( 404) </span>
                </span>
              </span>
            </div>
          </div>
        </article>
        {/*  */}
        <article className="food-vendors">
          <div
            style={{
              position: "relative",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            className="img-container"
          >
            <img
              src={buk}
              alt="Background"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <p
              style={{
                position: "absolute",
                top: "10%",
                left: "75%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#f6a63d7f",
                color: "white",

                borderRadius: "5px",
                textAlign: "center",
                width: "50%",
              }}
            >
              10% discount
            </p>
            <p
              style={{
                position: "absolute",
                top: "45%",
                left: "75%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                // padding: "2px 10px",
                borderRadius: "5px",
                textAlign: "center",
                width: "50%",
              }}
            >
              Tasty
            </p>

            <span
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="food_description">
                <span className="vendor-name">Mama J Buka</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <IoIosStar
                    style={{ color: "#28D1FF", background: "#ffffff" }}
                  />
                  <span>
                    4.9 <span style={{ color: "#3333" }}>( 500+) </span>
                  </span>
                </span>
              </div>
            </span>
          </div>

          <div
            style={{
              position: "relative",
              width: "300px",
            }}
            className="img-container"
          >
            <img
              src={buka}
              alt="Background"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <div className="food_description">
              <span className="vendor-name">Choice Meal</span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <IoIosStar
                  style={{ color: "#28D1FF", background: "#ffffff" }}
                />
                <span>
                  4.7 <span style={{ color: "#3333" }}>( 500+) </span>
                </span>
              </span>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              width: "300px",
            }}
            className="img-container"
          >
            <img
              src={bk}
              alt="Background"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <p
              style={{
                position: "absolute",
                top: "45%",
                left: "75%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                borderRadius: "5px",
                textAlign: "center",
                width: "50%",
              }}
            >
              local food
            </p>
            <div className="food_description">
              <span className="vendor-name">Kobe Delicious</span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <IoIosStar
                  style={{ color: "#28D1FF", background: "#ffffff" }}
                />
                <span>
                  4.9 <span style={{ color: "#3333" }}>(374) </span>
                </span>
              </span>
            </div>
          </div>

          <div className="food_image-container">
            <img
              src={bu}
              alt="Background"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            <div className="food-txt"></div>
            <p
              style={{
                position: "absolute",
                top: "10%",
                left: "70%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#f6a63d7f",
                color: "white",
                borderRadius: "5px",
                textAlign: "center",
                width: "50%",
              }}
            >
              10% discount
            </p>
            <p
              //   className="discount"
              style={{
                position: "absolute",
                top: "45%",
                left: "70%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                // padding: "2px 10px",
                borderRadius: "5px",
                textAlign: "center",
                width: "50%",
              }}
            >
              Tasty grill
            </p>
            <div className="food_description">
              <span className="vendor-name">Giddy Grills</span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <IoIosStar
                  style={{ color: "#28D1FF", background: "#ffffff" }}
                />
                <span>
                  4.9 <span style={{ color: "#3333" }}>( 404) </span>
                </span>
              </span>
            </div>
          </div>
        </article>
        {/*  */}
      </article>
    </div>
  );
};

export default OtherVendors;
