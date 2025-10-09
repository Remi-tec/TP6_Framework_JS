import { useState, useEffect } from "react";
import '..style/Liste.css';

function Liste() {
  const [liste, setListe] = useState([
  {
    id: 1,
    titre: "tache1",
    description: "le parapluie est mouillé",
    statut: false,
    echeance: "2024-06-30",
    creation: "2024-06-30",
    dateMAJ: "2024-06-30",
  },
  {
    id: 2,
    titre: "tache2",
    description: "aller au marché",
    statut: true,
    echeance: "2024-07-15",
    creation: "2024-07-01",
    dateMAJ: "2024-07-10",
  },
  {
    id: 3,
    titre: "tache3",
    description: "préparer le dîner",
    statut: true,
    echeance: "2024-08-01",
    creation: "2024-07-20",
    dateMAJ: "2024-07-25",
  },]);
    
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [echeance, setEcheance] = useState("");
  const [editionMode, setEditionMode] = useState(false);

  function afficherListe() {
    const mjStatut = (index: number) => {
      const updatedListe = [...liste];
      updatedListe[index].statut = !updatedListe[index].statut; // Inverse le statut
      setListe(updatedListe); // Met à jour l'état
    };
  
    const mjTitre = (index: number, newTitre: string) => {
      const updatedListe = [...liste];
      updatedListe[index].titre = newTitre; // Met à jour le titre
      setListe(updatedListe); // Met à jour l'état
    };
  
    const mjEcheance = (index: number, newEcheance: string) => {
      const updatedListe = [...liste];
      updatedListe[index].echeance = newEcheance; // Met à jour l'échéance
      setListe(updatedListe); // Met à jour l'état
    };
    const mjDescription = (index: number, newDescription: string) => {
      const updatedListe = [...liste];
      updatedListe[index].description = newDescription; // Met à jour la description
      setListe(updatedListe); // Met à jour l'état
    };
    console.log(liste);
  
    return (
      <table>
        <thead>
          <tr>
            <th>Statut</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Échéance</th>
            <th>Création</th>
            <th>Mise à jour</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {liste.map((it, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={it.statut}
                  onChange={() => mjStatut(index)} // Listener pour la checkbox
                  disabled={!editionMode} // Désactive la checkbox si editionMode est false
                />
              </td>
              <td>
                {editionMode ? (
                  <input
                    type="text"
                    value={it.titre}
                    onChange={(e) => mjTitre(index, e.target.value)} // Listener pour le titre
                  />
                ) : (
                  <p>{it.titre}</p> // Affiche le titre en texte non modifiable
                )}
              </td>
              <td>
                {editionMode ? (
                  <input
                    type="text"
                    value={it.description}
                    onChange={(e) => mjDescription(index, e.target.value)} // Listener pour la description
                  />
                ) : (
                  <p>{it.description}</p> // Affiche la description en texte non modifiable
                )}
              </td>
              <td>
                {editionMode ? (
                  <input
                    type="date"
                    value={it.echeance}
                    onChange={(e) => mjEcheance(index, e.target.value)} // Listener pour l'échéance
                  />
                ) : (
                  <p>{it.echeance}</p> // Affiche l'échéance en texte non modifiable
                )}
              </td>
              <td>
                <p>{it.creation}</p>
              </td>
              <td>
                <p>{it.dateMAJ}</p>
              </td>
              <td>
                <button onClick={() => setEditionMode(!editionMode)}>
                  {editionMode ? "Terminer l'édition" : "Éditer"}
                </button>
                <button onClick={() => suppTache(it.id)}>Suppression</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  

  function ajoutTache() {
    if (!titre.trim() || !description.trim() || !echeance.trim()) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
  
    const now = new Date().toISOString().split("T")[0]; // Date actuelle au format YYYY-MM-DD
  
    // Crée une nouvelle tâche avec les informations du formulaire
    const nouvelleTache = {
      id: Date.now(), // Utilise un timestamp comme identifiant unique
      titre,
      description,
      statut: false, // Par défaut, la tâche n'est pas cochée
      echeance,
      creation: now,
      dateMAJ: now,
    };
  
    // Ajoute la nouvelle tâche à la liste
    setListe([...liste, nouvelleTache]);
  
    // Réinitialise les champs du formulaire
    setTitre("");
    setDescription("");
    setEcheance("");
  }

 function suppTache(id: number) {
  const updatedListe = liste.filter((tache) => tache.id !== id);
  // Met à jour l'état avec la liste filtrée
  setListe(updatedListe);
 }


  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Nombre de tâches non terminées : {liste.filter((tache) => !tache.statut).length} Nombre de tâches terminées : {liste.length-liste.filter((tache) => !tache.statut).length}</p>
      <p>{afficherListe()}</p>

      <form>
        <div>
        <label>Titre : </label>
        <input value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Tape quelque chose..."/>
        </div>
        <div>
          <label>Description</label>
          <input onChange={(e) => setDescription(e.target.value)} placeholder="Tape quelque chose..." />
        </div>
        <div>
          <label>Echéance</label>
          <input type="date" onChange={(e) => setEcheance(e.target.value)} min="2018-01-01"/>
        </div>
        <input onClick={(ajoutTache)} type="submit" value="Ajouter" disabled={!titre.trim()} />
      </form>
    </div>
  );
}

export default Liste;
