import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card custom-card">
			<img className="card-img-top" src="..." alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere 
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
};
