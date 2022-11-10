//declare a variable(residentBtn) that selects the BUTTON element you created in your HTML file, or create it here
const residentBtn = document.querySelector('button')

//declare a variable(section) that selects the SECTION element you created in your HTML file, or create it here
const section = document.querySelector('section')

//declare a variable(baseURL) that takes the base URL we want to get our data from using the string data type
const baseURL = 'https://swapi.dev/api'


//write a function(btnClick) that retrieves data from the API we are requesting it from
const btnClick = () => {

    //write a request to get data from your first endpoint(the planet of Alderaan). Then...
    axios.get(`${baseURL}/planets/?search=alderaan`)
    .then(res => {

        //from the response you received from your first request, declare a variable(people) that stores the value of the data that is located in the (residents) key, which is located in the first index of (results)
        let people = res.data.results[0].residents

        //iterate over each element in the (residents) array using a loop
        for (let i = 0; i < people.length; i++) {
            
            //each time you increment your index, request the value for each individual element(people), then...
            axios.get(people[i]).then(res => {

                //declare a variable(myh2) that creates an h2 element
                let myh2 = document.createElement('h2')

                //set the h2 element's content to have the value of each name in the (residents) array
                myh2.textContent = res.data.name

                //add the h2 and its content to the SECTION you declared at the top of your main.js file
                section.appendChild(myh2)
            })
        }
    })
    

}

//add a click event to the BUTTON variable(residentBtn) you declared at the top of your main.js file, and set it to run the callback(btnClick) when invoked by the user
residentBtn.addEventListener('click', btnClick)