function calculateAge(datanascimento){
    const today = new Date();
    const birthDate = new Date(datanascimento);
    let idade = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        idade--;
    }
    return idade;
}
export default calculateAge;