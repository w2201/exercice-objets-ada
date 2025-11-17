/*Consignes : Implémentez les fonctions suivantes :

Calculer la moyenne de chaque étudiant·e

Trouver les étudiant·es d'une filière donnée

Identifier l'étudiante avec la meilleure moyenne

Statistiques par filière (moyenne des moyennes, taux d'absentéisme)

Ajouter une nouvelle note à un étudiante*/

// Base de données étudiants
const students = {
"A001": {
id: "A001",
name: "Alice Martin",
age: 22,
major: "Computer Science",
grades: [14, 16, 12, 18, 15],
absences: 3,
courses: ["JavaScript", "Algorithms", "Database"]
},
"A002": {
id: "A002",
name: "Bob Dupont",
age: 24,
major: "Mathematics",
grades: [11, 9, 15, 8, 13],
absences: 7,
courses: ["Calculus", "Statistics", "Algebra"]
},
"A003": {
id: "A003",
name: "Claire Leroy",
age: 21,
major: "Computer Science",
grades: [17, 19, 16, 18, 20],
absences: 1,
courses: ["JavaScript", "Web Development", "Data Structures"]
},
"A004": {
id: "A004",
name: "David Moreau",
age: 23,
major: "Physics",
grades: [12, 14, 11, 10, 13],
absences: 5,
courses: ["Mechanics", "Quantum Physics", "Thermodynamics"]
},
"A005": {
id: "A005",
name: "Emma Bernard",
age: 22,
major: "Computer Science",
grades: [15, 17, 16, 14, 19],
absences: 2,
courses: ["JavaScript", "Networks", "Security"]
}
};

// 1) Calculer la moyenne de chaque étudiant·e
function getAverage(grades) {
    return grades.reduce((acc, n) => acc + n, 0) / grades.length;
}
function getAverageOfStudents(id) {
    return getAverage(students[id].grades);
}

// 2) Trouver les étudiant·es d'une filière donnée
function getStudentsByMajor(major) {
    return Object.values(students).filter(s => s.major === major);
} 


// 3) Identifier l'étudiante avec la meilleure moyenne
function getBestStudent() {
    return Object.values(students).reduce((best, student) => {
        const avg = getAverage(student.grades);
        return avg > getAverage(best.grades) ? student : best;
    }); 
}

// 4) Statistiques par filière 
function getMajorStats(major) {
    const group = getStudentsByMajor(major);

    if (!Array.isArray(group) || group.length === 0) {
        console.log("Aucun étudiant trouvé pour la filière : " + major);
        return null;
    }

    const avgOfAverages = group.reduce((acc, s) => acc + getAverage(s.grades), 0) / group.length;

    const averageAbsences = group.reduce((acc, s) => acc + s.absences, 0) / group.length;

    return {
        filiere: major,
        moyenne_generale: avgOfAverages,
        absences_moyennes: averageAbsences
    };
}

// 5) Ajouter une note à un-e étudiant-e
function addGrade(id, newGrade) {
    students[id].grades.push(newGrade);
    return students[id].grades; 
}
 // test des fonctions
console.log("1) Moyenne d'Alice :", getAverageOfStudents("A001"));
console.log("2) Étudiants en Computer Science :", getStudentsByMajor("Computer Science"));
console.log("3) Best étudiante :", getBestStudent());
console.log("4) Stats Computer Science :", getMajorStats("Computer Science"));
console.log("5) Ajouter une note à A003 :", addGrade("A003", 18));