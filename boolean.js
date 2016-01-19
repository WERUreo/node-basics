var isValid = true;

function toggleBoolean(boolVar)
{
    if (typeof boolVar === "boolean")
    {
        return !boolVar;
    }
    else
    {
        console.log("Not a boolean");
    }   
}

console.log(toggleBoolean(isValid));
console.log(toggleBoolean("what"));