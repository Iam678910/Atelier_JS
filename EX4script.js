const notes = [10, 15, 8, 18, 12];
console.log("--- Ordre croissant ---");
const notesCroissantes = [...notes].sort((a, b) => a - b);
for (const note of notesCroissantes) {
  if (note < 10) {
    console.log(`Note inférieure à 10 détectée. Arrêt du script.`);
    break;
  }
  console.log(note);
}

console.log("\n--- Ordre décroissant ---");
const notesDecroissantes = [...notes].sort((a, b) => b - a);
for (const note of notesDecroissantes) {
  if (note < 10) {
    console.log(`Note inférieure à 10 détectée. Arrêt du script.`);
    break; // Arrête la boucle
  }
  console.log(note);
}
