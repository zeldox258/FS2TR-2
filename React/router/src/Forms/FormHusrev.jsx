import {useState} from 'react'

const FormHusrev = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		hobbies: "",
	});

	function handleSend() {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
		const newArray = [...userData, data];
		setData({ firstName: "", lastName: "", hobbies: "" });
		localStorage.setItem("userData", JSON.stringify(newArray));
	}

	function handleGet() {
    const array = JSON.parse(localStorage.getItem('userData'))
    console.log(array)
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	}

	return (
		<div>
			<div >
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					onChange={handleChange}
          value={data.firstName}
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					onChange={handleChange}
          value={data.lastName}
				/>
				<input
					type="text"
					name="hobbies"
					placeholder="Hoobies"
					onChange={handleChange}
          value={data.hobbies}
				/>

				<button onClick={handleSend}>Send</button>
				<button onClick={handleGet}>Get All</button>
			</div>
		</div>
	);
};

export default FormHusrev;