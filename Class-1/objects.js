let person = [
    {
        firstName:"Atheeq",
        gender:"Male"
    },
    {
        firstName:"Abdul",
        gender:"Male"
    },
    {
        firstName:"Wanda",
        gender:"Female",
        data:
        {
            age:"25"
        }
    },
    {
        firstName:"Gwen",
        gender:"Female"
    }
]

for(let i=0;i<person.length;i++)
{
    if(person[i]["gender"] == "Male")
    {
        console.log(person[i]["firstName"]);
    }
    
}