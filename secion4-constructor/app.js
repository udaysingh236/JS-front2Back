function person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const currDate = new Date(Date.now());
        if (currDate.getDate() === this.birthday.getDate() && currDate.getMonth() === this.birthday.getMonth()) {
            window.alert("Today is your birthday sir..!! Where is the party tonight ?");
            console.log('Happy Birthday ' + this.name);

        }
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);

    }
}

const uday = new person('Uday Singh', '16 Dec 1992');
console.log(uday.calculateAge());