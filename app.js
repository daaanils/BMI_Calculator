const calculateBMI = () => {
    //get input values from the form elements
    const [height, weight] =  ['#height', '#weight'].map(id => parseFloat(document.querySelector(id).value)
    );

    if(!height || !weight) {
        alert("Please input both height and weight");
        return;
    }

    const bmi = calculateBMIValue(height, weight);

    const category = getCategory(bmi);

    displayResults(bmi, category);

    
}

//function to calculate bmi 

const calculateBMIValue = (height, weight) => {
    return weight * 10000 / (height * height);
}



//Function to get BMI Category 

const getCategory = (bmi) => {
    
    if(bmi <= 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal Weight';
    }else if (bmi < 29.9) {
        return 'Overweight';
    } else if (bmi < 34.9) {
        return 'Obesity Class I';
    } else if (bmi < 39.9) {
        return 'Obesity Class II';
    } else {
        return 'Obesity Class III';
    };

}

const displayResults = (bmi, category) => {

    const resultElement = document.querySelector('#result')
    
    resultElement.innerText = ` ${bmi.toFixed(1)} Kg/m²`;

    const resultCategory = document.querySelector('#category')
    
    resultCategory.innerText = `${category}`


}


document.querySelector('#calculate-btn').addEventListener('click', calculateBMI);