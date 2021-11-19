const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch("https://3000-moccasin-chameleon-05rbhei6.ws-us18.gitpod.io/contact")
					.then(response => {
						if (response.ok) {
							return response.json();
						} else {
							return new Error("Error fetching the api");
						}
					})
					.then(data => setStore({ contacts: data }))
					.catch(error => console.error(error));
			},
			addContacts: contact => {
				fetch("https://3000-moccasin-chameleon-05rbhei6.ws-us18.gitpod.io/contact", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (response.ok) {
							getActions().getContacts();
						}
					})
					.catch(err => console.error("Error:", err));
			},

			editContacts: contact => {
				fetch(`https://3000-moccasin-chameleon-05rbhei6.ws-us18.gitpod.io/contact/${contact.id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (response.ok) {
							getActions().getContacts();
						}
					})
					.catch(err => console.error("Error:", err));
			},
			deleteContacts: id => {
				fetch(`https://3000-moccasin-chameleon-05rbhei6.ws-us18.gitpod.io/contact/${id}`, {
					method: "DELETE"
				}).then(() => getActions().getContacts());
			}
		}
	};
};

export default getState;
