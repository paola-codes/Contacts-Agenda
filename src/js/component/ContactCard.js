import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ContactCard = props => {
	return (
		<li className="list-group-item">
			<div className="row w-100 pt-1 pb-2">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCoOdTV7WEAETDYF.jpg%3Alarge&f=1&nofb=1"
						alt="Mike Anamendolla"
						className="rounded-circle mt-2 mx-auto d-block img-fluid"
						width="40%"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-start">
					<div className=" float-end">
						<Link to={`/edit/${props.contact.id}`}>
							<button className="btn">
								<i className="fas fa-pencil-alt" />
							</button>
						</Link>

						<button className="btn" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.contact.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted pe-2" />
					<span className="text-muted">{props.contact.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted pe-4"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.contact.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted pe-4"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.contact.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	contact: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
