import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		showModal: false,
		id: null
	});

	return (
		<div className="container pt-4 pb-5">
			<div>
				<h1 className="text-center p-0 m-0">{"Paola's Agenda"}</h1>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add New Contact!
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts &&
							store.contacts.map((contact, index) => (
								<ContactCard
									key={index}
									contact={contact}
									onDelete={() => setState({ showModal: true, id: contact.id })}
								/>
							))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} id={state.id} />
		</div>
	);
};
