import { Image } from "@nextui-org/react";
import React from "react";

const ContactPage = () => {
  return (
		<div className="contact">
			<div className="contact__left">
				<h1>CONTACT US</h1>
				<p>
					LET&#39;S CONNECT: WE&#39;RE HERE TO HELP, AND WE&#39;D LOVE TO HEAR
					FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT ,
					YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY
					PHONE, EMAIL, OR SOCIAL MEDIA.
				</p>
			</div>
			<div className="contact__right">
				<Image src="images/Service.svg" alt="service" />
			</div>
		</div>
  );
};

export default ContactPage;
