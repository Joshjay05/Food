import React from "react";
import "./onboarding.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
// import { AiOutlineLine } from "react-icons/ai";
import admin from "../Image/user.png";
import logo from "../Image/logo.png";
import food from "../Image/on.png";
import buka from "../Image/Bukka 2 1.png";
import buk from "../Image/choice.png";
import bk from "../Image/kobe delicious.png";
import bu from "../Image/Bukka Grill 1 1.png";
import { IoIosStar } from "react-icons/io";
import OtherVendors from "./OtherVendors";
import foodlogo from "../Image/foodlogo.png";
import foodring from "../Image/Ring.png";
import hot from "../Image/hot.png";
import cooperation from "../Image/handshake.png";
import company from "../Image/companies.png";
import ellipse from "../Image/Ellipse 553.png";
import Rellipse from "../Image/EllipseRight.png";
import { Link } from "react-router-dom";

import vendor from "../Image/vendor.png";
import Footer from "../Footer/Footer";
const ONboarding = () => {
	//   const imageUrl = buka;

	return (
		<div>
			<nav className="o_navbar">
				<div>
					<img src={logo} alt="" />
				</div>
				<div className="search">
					<CiSearch className="s-icon" />{" "}
					<input
						type="search"
						placeholder="Search for anything........"
						className="input"
					/>
				</div>
				<div className="right-nav">
					<span className="r-icon">
						{" "}
						<MdOutlineFavoriteBorder className="f-icon" />
						<div className="s">5</div>{" "}
					</span>
					<span className="r-icon">
						<IoIosNotificationsOutline className="n-icon" />
						<div className="s">2</div>
					</span>
					<img src={admin} alt="" />
				</div>
			</nav>

			<section className="on_header">
				<article className="text-area">
					<div className="on_txt">
						<span className="wel-txt">Welcome to TM30 food plattform</span>
						<div className="line"></div>
					</div>
					<p className="cta">
						order your best <br /> meal at anytime
					</p>
					<span className="extra">Delicious food is waiting for you</span>
				</article>
				<article className="food">
					<img src={food} alt="" />
				</article>
			</section>

			<section className="vendors">
				<article className="vendors-container">
					<p>Top Vendors</p>
					<article className="food-vendors">
						<div
							style={{
								position: "relative",
								width: "300px",
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
							}}
							className="img-container">
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
								}}>
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
								}}>
								Tasty
							</p>

							<span
								style={{
									display: "flex",
									flexDirection: "column",
								}}>
								<div className="food_description">
									<span className="vendor-name">Mama J Buka</span>
									<span
										style={{
											display: "flex",
											alignItems: "center",
											gap: "5px",
										}}>
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
							className="img-container">
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
									style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
							className="img-container">
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
								}}>
								local food
							</p>
							<div className="food_description">
								<span className="vendor-name">Kobe Delicious</span>
								<span
									style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
								}}>
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
								}}>
								Tasty grill
							</p>
							<div className="food_description">
								<span className="vendor-name">Giddy Grills</span>
								<span
									style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
					<OtherVendors />
				</article>

				{/*  */}
				{/*  */}
			</section>

			{/* hot deals */}
			<article className="hotdeals-section">
				<section className="hotdeals">
					<img src={foodlogo} alt="" />
					<article className="middle-deals">
						<div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
							<p className="hot">
								<img src={hot} alt="" /> <p> Hot deals</p>{" "}
							</p>
							<div className="line"></div>
						</div>
						<div className="a_btn">
							<button>Fast Food</button>
							<button>Pasteries</button>
							<button>Breakfast</button>
							<button>Tasty</button>
							<button>Traditional</button>
						</div>
						<div className="a_btn">
							<button>Pepper Soup</button>
							<button>Local Food</button>
							<button>Pasta</button>
							<button>Finger Food</button>
							<button>Lunch</button>
						</div>
					</article>
					<img src={foodring} className="foodring" alt="" />
				</section>
				<div className="cooperation">
					<div className="c-line"></div>
					<img src={cooperation} className="cooperation-img" alt="" />
					<div className="c-line"></div>
				</div>

				<b className="ellipse">
					<img src={Rellipse} className="cooperation-el1" alt="" />

					<img src={ellipse} className="cooperation-el2" alt="" />
				</b>
				<hr />
			</article>
			{/* end of hot deals */}

			{/* lets collaborate */}
			<section className="collaboration">
				<article className="c-txt">
					<p>Let's Collaborate</p>
					{/* <div className="c-line"></div> */}
				</article>

				<section className="set-ups">
					<article className="set-up">
						<img src={vendor} alt="" />
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "20px",
							}}>
							<span>Set Up as Vendor on TM30 food Platform</span>
							<span>Expand your sales and get customer</span>
						</div>
						<Link to="/" className="sign-up_button">
							{" "}
							<button className="sign-up_button">Sign Up</button>{" "}
						</Link>
					</article>

					<article className="set-up">
						<img src={company} alt="" />
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "20px",
							}}>
							<span>Set Up as Vendor on TM30 food Platform</span>
							<span>Expand your sales and get customer</span>
						</div>
						<Link to="/" className="sign-up_button">
							{" "}
							<button className="sign-up_button">Sign Up</button>{" "}
						</Link>
					</article>
				</section>
			</section>
			{/* let's collaborate */}
			{/* footer */}
			<Footer />
			{/* footer end */}
		</div>
	);
};

export default ONboarding;
