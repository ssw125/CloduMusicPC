export function praseJ(J){
    const result = JSON.parse(JSON.parse(JSON.parse(J).songs))
    console.log(result)
}