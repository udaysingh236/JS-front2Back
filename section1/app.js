const name = 'Uday Singh',
    city = 'Mumbai',
    age = 26,
    job = 'Web Devloper';
let html;

html = `
    <ul>
        <li>Name: $(name)</li>
        <li>city: $(city)</li>
        <li>Job:  $(job)</li>
        <li>Age:  $(age)</li>    
    </ul>
`;

document.body.innerHTML = html;