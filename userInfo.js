

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}


const names = ["Jane", "Ama", "fowler", "ross", "Dyke"];


const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);


const modifiedNames = formatArrayStrings(names, processedNumbers);


const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);

