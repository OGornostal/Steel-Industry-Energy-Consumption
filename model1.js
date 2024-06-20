
window.addEventListener("DOMContentLoaded", async() => {
		const MODEL_URL = 'model.json';
		const model = await tf.loadLayersModel(MODEL_URL);
		
		let consumption_text = document.getElementById("consumption");
		consumption_text.innerHTML = "Тепер можете визначити енергоспоживання";
		let button = document.getElementById("predict");
		button.addEventListener("click", () => {
			const LagCRP = parseFloat(document.getElementById("LagCRP").value);
			const LeadCRP = parseFloat(document.getElementById("LeadCRP").value);
			const LagCPF = parseFloat(document.getElementById("LagCPF").value);
			const LeadCPF = parseFloat(document.getElementById("LeadCPF").value);
			const NSM = parseFloat(document.getElementById("NSM").value);
			
			const input = tf.tensor2d([[LagCRP, LeadCRP, LagCPF, LeadCPF, NSM]], [1, 5]);
			const result = model.predict(input).dataSync();
			consumption_text.innerHTML = "Usage, kWh = " + result[0];
		});
//		button.style.visibility = "visible";
//		console.log(button.style);

		//console.log(model.summary());
		//alert(result);
});
