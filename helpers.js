export const getFormData = (form) => {
	let formData = {};

	if(form.nodeName != "FORM") {
		return formData;
	}

	form = new FormData(form);
	
	for(var pair of form.entries()) {
	   formData[pair[0]] = pair[1]; 
	}

	return formData;
}

export const changeObjectState = (state, callback) => {
	return callback({...state});
}

export const coppyObjectState = (state) => {
	return {...state};
}

export const secondsToHMS = (inputSeconds) => {
	let hours, minutes, seconds;
    inputSeconds = Number(inputSeconds);

    hours = Math.floor(inputSeconds / 3600);
    minutes = Math.floor(inputSeconds % 3600 / 60);
    seconds = Math.floor(inputSeconds % 3600 % 60);

    return (
    		hours + ":" 
    		+ (minutes < 10 ? "0" : "") + minutes + ":" 
    		+ (seconds < 10 ? "0" : "") + seconds
    );
}
