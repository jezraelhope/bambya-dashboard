import newSampleData from "./newSampleData";

export const fetchedData = async () => {
	try {
		const data = await fetch('/trades');
		const jsonData = await data.json();
		return jsonData.trades
	} catch(err) {
		console.log(err)
	}
}

export const months = Object.keys(newSampleData);