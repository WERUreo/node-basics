// function greetUser(name)

function greetUser(name)
{
    if (typeof name === 'undefined')
    {
        console.log("Hello World!");
    }
    else
    {
        console.log("Hello " + name + "!");
    }
}

greetUser("Keli'i");
greetUser("John");

var name = "Cory";
greetUser(name);

greetUser();
