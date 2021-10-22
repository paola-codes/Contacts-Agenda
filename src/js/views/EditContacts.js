import React, { useContext, useState } from "react";
import { PropTypes } from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const EditContact = props => {
	const { actions, store } = useContext(Context);

	const actualContact = store.contacts.find(contact => {
		return contact.id === props.match.params.id;
	});

	const [updatedContact, setUpdatedContact] = useState({ ...actualContact });

	const updateContact = () => {
		actions.editContacts(updatedContact);
	};

	const handleChange = e => setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Now editing: {updatedContact.full_name}</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							onChange={handleChange}
							value={updatedContact.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							onChange={handleChange}
							value={updatedContact.email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={handleChange}
							value={updatedContact.phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							onChange={handleChange}
							value={updatedContact.address}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary btn-lg my-3 me-3"
						onClick={() => {
							updateContact();
							props.history.push("/");
						}}>
						Save!
					</button>
					<Link className="mt-3 w-100 text-center fs-4" to="/">
						Back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
