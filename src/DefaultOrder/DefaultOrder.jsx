import React from "react";
import jollof from "../Image/White Rice 1.png";
import turkey from "../Image/Turkey.png";

const DefaultOrder = () => {
	return (
		<section>
			<button>Default Order</button>
			<div>
				<img src={jollof} alt="" />
				<p>Jollof Rice</p>

				<input type="checkbox" />
			</div>
			<div>
				<img src={turkey} alt="" />
				<p>Turkey</p>

				<input type="checkbox" />
			</div>

			<button>Please proceed to submit</button>
		</section>
	);
};

export default DefaultOrder;
